import { SignJWT, jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const secretKey = process.env.JWT_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export type CartLoad = {
  productId: string;
  quantity: number;
};

type SessionPayload = {
  cart: CartLoad[];
};

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  const { payload } = await jwtVerify<SessionPayload>(session, encodedKey, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateCart(quantity: number, productId: string) {
  const session = await getSession();
  if (!session) return false;

  const item = session.cart.find((x) => x.productId === productId);

  if (item) {
    item.quantity = quantity;
  } else {
    session.cart.push({
      quantity,
      productId,
    });
  }

  cookies().set("session", await encrypt(session), { httpOnly: true });
  return true;
}

export async function removeItem(productId: string) {
  const session = await getSession();
  if (!session) return;

  session.cart = session.cart.filter((x) => x.productId !== productId);
  cookies().set("session", await encrypt(session), { httpOnly: true });
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  const expires = new Date(Date.now() + 86400000);
  const res = NextResponse.next();

  if (!session) {
    res.cookies.set({
      name: "session",
      value: await encrypt({ cart: [] }),
      httpOnly: true,
      expires: expires,
    });
  }

  return res;
}

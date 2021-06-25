import { CustomOptions, Static, TValue, Type } from "@sinclair/typebox";

export function literalUnion<T extends TValue>(items: T[], options?: CustomOptions) {
	return Type.Union(items.map((e) => (Type.Literal<T>(e))), options);
}

export const userSchema = Type.Object({
  firstName: Type.Optional(
    Type.String({ minLength: 1 })
  ),
  lastName: Type.Optional(
    Type.String({ minLength: 1 })
  ),
  email: Type.String({ format: 'email' }),
  password: Type.String(),
  birthday: Type.Optional(
    Type.String({ format: 'date' })
  ),
})

export type User = Static<typeof userSchema>;
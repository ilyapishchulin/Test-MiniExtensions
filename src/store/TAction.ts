export type TAction<TType, TData = undefined> = [
  TData,
] extends [undefined]
  ? { type: TType }
  : { type: TType; data: TData };

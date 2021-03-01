export interface GenericContext<T, P = unknown> {
  type: T;
  payload?: P;
}

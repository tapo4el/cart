export interface Bike {
    [key: string]: string;
}
export interface AppState {
    cart: Bike[];
}
export interface DataReceivedAction {
    payload: Bike[];
}
export interface RemoveAction {
    payload: string;
}
export interface ChangeAmountAction {
    payload: AmountPayload;
}
export interface AmountPayload {
    id: string;
    amount: string;
}

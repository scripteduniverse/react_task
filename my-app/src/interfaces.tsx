// Interface for good fetched from server
export interface IGood {
    name: string,
    inStock: number,
    price: number
}

// extended good interface to count the amount in cart
export interface IGoodCart extends IGood {
    amount: number
}

// Interface of group of goods fetched from server
export interface IGroup {
    groupName: string,
    items: IGood[]
}
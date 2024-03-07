export class CreateRequestDto {
    phoneNumber: string
    name: string
    description: string
    userId: number
    date: Date
    basketId?: number
    serviceId?: number  
}

import { UserRegistered as UserRegisteredEvent } from "../generated/UserRegistry/UserRegistry"
import { UserRegistered } from "../generated/schema"

export function handleUserRegistered(event: UserRegisteredEvent): void {
  let entity = new UserRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userId = event.params.userId
  entity.mainAddress = event.params.mainAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

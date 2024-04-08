import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { UserRegistered } from "../generated/UserRegistry/UserRegistry"

export function createUserRegisteredEvent(
  userId: string,
  mainAddress: Address
): UserRegistered {
  let userRegisteredEvent = changetype<UserRegistered>(newMockEvent())

  userRegisteredEvent.parameters = new Array()

  userRegisteredEvent.parameters.push(
    new ethereum.EventParam("userId", ethereum.Value.fromString(userId))
  )
  userRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "mainAddress",
      ethereum.Value.fromAddress(mainAddress)
    )
  )

  return userRegisteredEvent
}

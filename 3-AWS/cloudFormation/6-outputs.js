/**
 * output section declares optional output values that can import into other stacks
 * it's the best way to perform some collaborations cross stack, as we let expers handle their own part of the stack
 * we can't delete a cloudFormation stack if it;s output are being referenced by another cloudFormation stack
 *
 * ---how to use---
 * Fn::ImportValue
 */

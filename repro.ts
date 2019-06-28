import {App, Stack, IAspect, IConstruct} from "@aws-cdk/core"
import { Bucket } from "@aws-cdk/aws-s3"

class Aspect implements IAspect {
  visit(construct: IConstruct) {
    construct.node.addError("Error!")
  }
}

const app = new App()
const stack = new Stack(app, "Stack")
new Bucket(stack, "Bucket")

stack.node.applyAspect(new Aspect())
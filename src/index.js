import { BraceValidation } from "./brace.validation";
import { TreeHeight } from "../tree.height";

// const validator = new BraceValidation();
// validator.run("{{{**[][][]");

const tree = new TreeHeight([2,2,3,5,5,7,7,9,9,-1]);
console.log(tree.maxHeight);
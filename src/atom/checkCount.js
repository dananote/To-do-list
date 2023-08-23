import { atom } from "recoil";

const checkCount = atom({
    key: "checkCount",
    default: 0,
})

export default checkCount;
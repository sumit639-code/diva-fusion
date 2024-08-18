const { Jwellery } = require("./Jwellery");
const { Kurti } = require("./kurti");
const { sarees } = require("./saree");
const { Silk } = require("./silk");

export const combined = [...Jwellery,...Kurti,...sarees,...Silk];
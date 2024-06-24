"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCoquetelDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_coquetel_dto_1 = require("./create-coquetel.dto");
class UpdateCoquetelDto extends (0, mapped_types_1.PartialType)(create_coquetel_dto_1.CreateCoquetelDto) {
}
exports.UpdateCoquetelDto = UpdateCoquetelDto;
//# sourceMappingURL=update-coquetel.dto.js.map
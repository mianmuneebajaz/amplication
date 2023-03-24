import { Module } from "@nestjs/common";
import { UserProfileModuleBase } from "./base/userProfile.module.base";
import { UserProfileService } from "./userProfile.service";
import { UserProfileController } from "./userProfile.controller";

@Module({
  imports: [UserProfileModuleBase],
  controllers: [UserProfileController],
  providers: [UserProfileService],
  exports: [UserProfileService],
})
export class UserProfileModule {}

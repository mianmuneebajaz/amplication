import { Module } from "@nestjs/common";
import { HostelModuleBase } from "./base/hostel.module.base";
import { HostelService } from "./hostel.service";
import { HostelController } from "./hostel.controller";

@Module({
  imports: [HostelModuleBase],
  controllers: [HostelController],
  providers: [HostelService],
  exports: [HostelService],
})
export class HostelModule {}

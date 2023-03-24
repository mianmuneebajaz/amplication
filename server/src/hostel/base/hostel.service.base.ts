/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Hostel, User } from "@prisma/client";

export class HostelServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.HostelFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HostelFindManyArgs>
  ): Promise<number> {
    return this.prisma.hostel.count(args);
  }

  async findMany<T extends Prisma.HostelFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HostelFindManyArgs>
  ): Promise<Hostel[]> {
    return this.prisma.hostel.findMany(args);
  }
  async findOne<T extends Prisma.HostelFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.HostelFindUniqueArgs>
  ): Promise<Hostel | null> {
    return this.prisma.hostel.findUnique(args);
  }
  async create<T extends Prisma.HostelCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HostelCreateArgs>
  ): Promise<Hostel> {
    return this.prisma.hostel.create<T>(args);
  }
  async update<T extends Prisma.HostelUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HostelUpdateArgs>
  ): Promise<Hostel> {
    return this.prisma.hostel.update<T>(args);
  }
  async delete<T extends Prisma.HostelDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.HostelDeleteArgs>
  ): Promise<Hostel> {
    return this.prisma.hostel.delete(args);
  }

  async getCreatedBy(parentId: string): Promise<User | null> {
    return this.prisma.hostel
      .findUnique({
        where: { id: parentId },
      })
      .createdBy();
  }
}
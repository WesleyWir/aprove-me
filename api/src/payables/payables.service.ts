import { Injectable } from '@nestjs/common';
import { Payable, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PayablesService {
    constructor(private prisma: PrismaService) { }

    async createPayable(data: Prisma.PayableCreateInput): Promise<Payable> {
        return this.prisma.payable.create({
            data,
        });
    }
}

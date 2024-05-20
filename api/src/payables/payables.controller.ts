import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PayablesService } from './payables.service';
import { StorePayableRequest } from './requests/store-payable.request';

@Controller('payables')
export class PayablesController {
    constructor(
        private readonly payableService: PayablesService,
    ) { }

    @Get()
    index(): any {
        // TODO:;
    }

    @UsePipes(new ValidationPipe())
    @Post()
    store(@Body() payablePayload: StorePayableRequest) {
        return this.payableService.createPayable(payablePayload);
    }
}

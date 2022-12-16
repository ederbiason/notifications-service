/* eslint-disable prettier/prettier */

import { SendNotification } from "@application/use-cases/send-notification";
import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { NotificationsController } from "./kafka/controllers/notifications.controller";
import { KafkaConsumerService } from "./kafka/kafka-consumer.service";

@Module({
    imports: [DatabaseModule],
    providers: [KafkaConsumerService, SendNotification],
    controllers: [NotificationsController]
})

export class MessagingModule {

}

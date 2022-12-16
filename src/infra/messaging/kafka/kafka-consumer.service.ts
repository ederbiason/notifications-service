/* eslint-disable prettier/prettier */

import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
    constructor() {
        super({
            client: {
                clientId: 'notifications',
                brokers: ['equipped-donkey-5387-us1-kafka.upstash.io:9092'],
                sasl: {
                    mechanism: 'scram-sha-256',
                    username: 'ZXF1aXBwZWQtZG9ua2V5LTUzODckik-WMz7a9llUnlFkK19jalrZT-TiTgkDS3w',
                    password: 'J4mWaGpyJgOdn9ODy8bDK76RuMbY84a-B8Y59Bjqthws668nydT3pWR8ruy5zjR0Fqvf4g==',
                },
                ssl: true,
            }
        })
    }

    async onModuleDestroy() {
        await this.close()
    }
}
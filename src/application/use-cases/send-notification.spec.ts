/* eslint-disable prettier/prettier */

import { Notification } from "../entities/notification"
import { SendNotification } from "./send-notification"

// "Fake" database

const notifications: Notification[] = [];

// Persistence layer
const notificationsRepository = {
    async create(notification: Notification) {
        notifications.push(notification)
    }
}

// End of the "Fake" database

describe('Send notification', () => {
    it('should be able to send a notification', async () => {
        const sendNotification = new SendNotification(notificationsRepository)

        await sendNotification.execute({
            content: 'This is a notification',
            category: 'social', 
            recipientId: 'exameple-recipient-id'
        })


        expect(notifications).toHaveLength(1)
    })
})
import { DAYS_OF_A_WEEK_IN_ORDER } from "@/constants";
import { relations } from "drizzle-orm";
import { boolean, index, integer, pgEnum, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

const createdAt = timestamp("createdAt").notNull().defaultNow()

const updatedAt = timestamp("updatedAt").notNull().defaultNow().$onUpdate(() => new Date())

export const EventTable = pgTable(
    "events", // name of table in db
    {
         id: uuid("id").primaryKey().defaultRandom(),
         name: text("name").notNull(),
         description: text("description"),
         durationInMinutes: integer("durationInMinutes").notNull(),
         clerkuserId: text("clerkuserId").notNull(),
         isActive: boolean("isActive").notNull().default(true),
         createdAt,
         updatedAt
    },
    table => ([
        index("clerkuserIdIndex").on(table.clerkuserId)
    ])
)

export const ScheduleTable = pgTable(
    "schedules",
    {
        id: uuid("id").primaryKey().defaultRandom(),
        timezone: text("timezone").notNull(),
        clerkUserId: text("clerkUserId").notNull().unique(),
        createdAt,
        updatedAt

    }
)

export const scheduleRelations = relations(ScheduleTable, ({many}) => ({
    availabilities: many(ScheduleAvailabilityTable),
}))

export const scheduleDayOfWeekEnum = pgEnum("day", DAYS_OF_A_WEEK_IN_ORDER)

export const ScheduleAvailabilityTable = pgTable(
    "scheduleAvailabilities",
    {
        id: uuid("id").primaryKey().defaultRandom(),
        scheduledId: uuid("scheduledId").notNull().references(() => ScheduleTable.id, {onDelete: "cascade"}),
        startTime: text("startTime").notNull(),
        endTime: text("endTime").notNull(),
        dayOfWeek: scheduleDayOfWeekEnum("dayOfWeek").notNull()
    },

    table => ([
        index("scheduleIndex").on(table.scheduledId)
    ])
)

export const ScheduleAvailabilityRelations = relations(
    ScheduleAvailabilityTable,
    ({one}) => ({
        schedule: one(ScheduleTable, {
            fields: [ScheduleAvailabilityTable.scheduledId],
            references: [ScheduleTable.id]
        })
    })
)
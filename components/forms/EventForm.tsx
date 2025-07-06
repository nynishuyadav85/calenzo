'use client'

import { eventFormSchema } from "@/schema/events";
import { useForm } from "react-hook-form";
import z from "zod";

// component to handle editing/deleting and creating a event
export default function EventForm({
    event,
}: {
    event?: {
        id: string,
        name: string,
        description?: string,
        durationInMinutes: number,
        isActive: boolean
    }
}) {

    const form = useForm<z.infer<typeof eventFormSchema>>({

    })
    return (
        <div>
            {/* Event form implementation goes here */}
        </div>
    );
}
import { Availability } from "../availability/Availability";
import { Booking } from "../booking/Booking";
import { EventTypeCustomInput } from "../eventTypeCustomInput/EventTypeCustomInput";
import { DestinationCalendar } from "../destinationCalendar/DestinationCalendar";
import { HashedLink } from "../hashedLink/HashedLink";
import { JsonValue } from "type-fest";
import { Schedule } from "../schedule/Schedule";
import { Team } from "../team/Team";
import { User } from "../user/User";
import { Webhook } from "../webhook/Webhook";
import { WorkflowsOnEventType } from "../workflowsOnEventType/WorkflowsOnEventType";

export type EventType = {
  afterEventBuffer: number;
  availability?: Array<Availability>;
  beforeEventBuffer: number;
  bookings?: Array<Booking>;
  currency: string;
  customInputs?: Array<EventTypeCustomInput>;
  description: string | null;
  destinationCalendar?: DestinationCalendar | null;
  disableGuests: boolean;
  eventName: string | null;
  hashedLink?: HashedLink | null;
  hidden: boolean;
  hideCalendarNotes: boolean;
  id: number;
  length: number;
  locations: JsonValue;
  metadata: JsonValue;
  minimumBookingNotice: number;
  periodCountCalendarDays: boolean | null;
  periodDays: number | null;
  periodEndDate: Date | null;
  periodStartDate: Date | null;
  periodType?: "UNLIMITED" | "ROLLING" | "RANGE";
  position: number;
  price: number;
  recurringEvent: JsonValue;
  requiresConfirmation: boolean;
  schedule?: Schedule | null;
  schedulingType?: "ROUND_ROBIN" | "COLLECTIVE" | null;
  seatsPerTimeSlot: number | null;
  slotInterval: number | null;
  slug: string;
  successRedirectUrl: string | null;
  team?: Team | null;
  timeZone: string | null;
  title: string;
  userId: number | null;
  users?: Array<User>;
  webhooks?: Array<Webhook>;
  workflows?: Array<WorkflowsOnEventType>;
};

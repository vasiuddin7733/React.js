import { format, getYear } from "date-fns";

// https://date-fns.org/

export default function formatDate(dateString, variant = "dateInput") {
  switch (variant) {
    case "dateInput":
      return format(dateString, "yyyy-MM-dd");
    case "toMonth":
      return format(new Date(dateString), "MM.yyyy");
    case "toDay":
      return format(new Date(dateString), "dd.MM.yyyy");
    case "toDateTime":
      return format(new Date(dateString), "hh:mm - dd.MM.yyyy");
    case "age":
      return new Date().getFullYear() - getYear(dateString);
  }
}

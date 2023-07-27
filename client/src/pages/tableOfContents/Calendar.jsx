// // import React from "react";
// // import Fullcalendar from "@fullcalendar/react";
// // import dayGridPlugin from "@fullcalendar/daygrid";
// // import timeGridPlugin from "@fullcalendar/timegrid";
// // import interactionPlugin from "@fullcalendar/interaction";

// // function Calendar() {
// //   return (
// //     <div>
// //       <Fullcalendar
// //         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
// //         initialView={"dayGridMonth"}
// //         headerToolbar={{
// //           start: "today prev,next", // will normally be on the left. if RTL, will be on the right
// //           center: "title",
// //           end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
// //         }}
// //         height={"90vh"}
// //       />
// //     </div>
// //   );
// // }

// // export default Calendar;


// import React, { useState } from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';

// function Calendar() {
//   const [events, setEvents] = useState([]);

//   const handleEventClick = (eventInfo) => {
//     // Retrieve the clicked event and its properties
//     const clickedEvent = eventInfo.event;
//     const { id, title, start, end } = clickedEvent;

//     // Prompt the user for a new event title
//     const newTitle = prompt('Enter a new title for the event', title);

//     // Update the event's title if a new title was entered
//     if (newTitle) {
//       clickedEvent.setProp('title', newTitle);

//       // Update the events state with the modified event
//       const updatedEvents = events.map((event) => {
//         if (event.id === id) {
//           return {
//             ...event,
//             title: newTitle,
//           };
//         }
//         return event;
//       });
//       setEvents(updatedEvents);
//     }
//   };

//   const handleDateSelect = (selectInfo) => {
//     // Retrieve the selected date range
//     const { start, end } = selectInfo;

//     // Prompt the user for a title for the new event
//     const title = prompt('Enter a title for the new event');

//     // Create a new event object with the provided title and date range
//     const newEvent = {
//       id: generateUniqueId(), // Generate a unique ID for the event
//       title,
//       start,
//       end,
//     };

//     // Update the events state with the new event
//     setEvents([...events, newEvent]);
//   };

//   const generateUniqueId = () => {
//     return Math.random().toString(36).substr(2, 9);
//   };

//   return (
//     <div>
//       <FullCalendar
//         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//         initialView="dayGridMonth"
//         headerToolbar={{
//           start: 'today prev,next',
//           center: 'title',
//           end: 'dayGridMonth,timeGridWeek,timeGridDay',
//         }}
//         height="90vh"
//         events={events}
//         eventClick={handleEventClick}
//         select={handleDateSelect}
//         editable={true} // Enable event editing
//       />
//     </div>
//   );
// }

// export default Calendar;


import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {
  const [events, setEvents] = useState([]);

  const handleEventClick = (clickInfo) => {
    const title = prompt('Enter a new title for the event:', clickInfo.event.title);
    if (title) {
      const updatedEvents = events.map((event) => {
        if (event.id === clickInfo.event.id) {
          return { ...event, title };
        }
        return event;
      });
      setEvents(updatedEvents);
    }
  };

  const handleDateSelect = (selectInfo) => {
    const title = prompt('Enter a title for the new event:');
    if (title) {
      const newEvent = {
        id: generateUniqueId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
      };
      setEvents([...events, newEvent]);
    }
  };

  const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        events={events}
        editable={true}
        selectable={true}
        eventClick={handleEventClick}
        select={handleDateSelect}
      />
    </div>
  );
};

export default Calendar;


// function calculateArea(length, width) {

// return length * width 
// }
// function calculatePerimeter(length, width) {

//   return 2*(length + width)
//   }

// function startCalculator() {
// let length=  prompt ("Enter the length oḟ the rectangle");
// let width=  prompt ("Enter the width of the rectangle");

// length= Number (length)
// width= Number (width)

// let area = calculateArea(length,width)

// alert("The area of the rectangle is: " + area);
// let perimeter = calculatePerimeter(length,width)

// alert("The primeter of the rectangle is: " + perimeter);
// }
// // function calculatePerimeter(length, width) {

// //   return 2 (length + width) 
// //   }
  
// //   function startCalculatorprimeter() {
// //   let length=  prompt ("Enter the length oḟ the rectangle");
// //   let width=  prompt ("Enter the width of the rectangle");
  
// //   length= Number (length)
// //   width= Number (width)
  
// //   let perimeter = calculatePerimeter(length,width)
  
// //   alert("The primeter of the rectangle is: " + perimeter);
  
  
// //   }

function sumDivisibleBy3Or5(n) {
  let totalSum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      totalSum += i;
    }
  }
  return totalSum;
}

// Get input from the user (you might need to adapt this based on your environment, e.g., browser or Node.js)
// const inputN = prompt("Enter a positive integer n:");
// const num = parseInt(inputN);

// if (!isNaN(num) && num > 0) {
//   const result = sumDivisibleBy3Or5(num);
//   console.log(`The sum of numbers between 1 and ${num} divisible by 3 or 5 is: ${result}`);
// } else {
//   console.log("Invalid input. Please enter a positive integer.");
// }


// Example usage
// let n = prompt("Enter a positive integer:");
// console.log(typeof(n));

// n = Number(n);
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         sum += i;
//     }
// }
// const answer = "Sum of numbers divisible by 3 or 5: " + sum
// alert(answer);

// const anotherElement = document.getElementById('inline-style');

// anotherElement.style.backgroundColor = 'lightblue';
// anotherElement.style.fontSize = '18px';
// anotherElement.style.color = '#333';

// const myElement = document.getElementById('styled-element');

// myElement.classList.add('highlight');
// myElement.classList.remove('important');
// myElement.classList.toggle('active');

// if (myElement.classList.contains('highlight')) {
//   console.log('Element has the highlight class.');
// }

// const myLink = document.querySelector('a');
// myLink.href = 'https://www.example.com';

// const myInput = document.getElementById('my-input');
// myInput.value = 'New input value';

// const currentSource = myImage.getAttribute('src');
// console.log(currentSource); // Output: new-image.jpg

// const myImage = document.getElementById('my-image');

// // Change the 'src' attribute
// myImage.setAttribute('src', 'new-image.jpg');

// // Change the 'alt' attribute
// myImage.setAttribute('alt', 'A different image');

// const myDiv = document.getElementById('content-area');

// // Replace the entire content with new HTML
// myDiv.innerHTML = '<p>This is a <strong>new</strong> paragraph.</p>';

// // Append to the existing HTML
// myDiv.innerHTML += '<button>Click Me</button>';

// const myParagraph = document.querySelector('.paragraph');
// myParagraph.innerText = 'This is some updated text.';

// // Get the element
// const myHeading = document.getElementById('main-heading');

// // Change the text content
// myHeading.textContent = 'New Heading Text!';


// script.js

// document.addEventListener('DOMContentLoaded', () => {
//   const monthDisplay = document.getElementById('monthDisplay');
//   const yearDisplay = document.getElementById('yearDisplay');
//   const calendarGrid = document.getElementById('calendarGrid');
//   const prevMonthButton = document.getElementById('prevMonth');
//   const nextMonthButton = document.getElementById('nextMonth');
//   const eventDetailsPopup = document.getElementById('eventDetailsPopup');
//   const closePopupButton = document.getElementById('closePopup');
//   const popupDateElement = document.getElementById('popupDate');
//   const popupEventsListElement = document.getElementById('popupEventsList');

//   let currentMonth = new Date().getMonth(); // 0-indexed
//   let currentYear = new Date().getFullYear();

//   // --- Event Data Structure ---
//   // Array of event objects
//   // date format: 'YYYY-MM-DD'
//   const events = [
//       { date: '2025-05-15', title: 'Team Sync', description: 'Weekly team meeting.' },
//       { date: '2025-05-20', title: 'Project Demo', description: 'Present progress to stakeholders.' },
//       { date: '2025-06-01', title: 'Holiday', description: 'Public Holiday.' },
//       { date: '2025-06-10', title: 'Client Call', description: 'Discussion with client regarding new requirements.' },
//       { date: '2025-06-10', title: 'Internal Review', description: 'Review project milestones.' }, // Multiple events on same day
//       { date: '2025-07-04', title: 'Vacation Starts', description: 'Start of annual leave.' },
//       { date: '2025-07-18', title: 'Vacation Ends', description: 'Return to work.' },
//   ];

//   // Function to find events for a specific date
//   const getEventsForDate = (date) => {
//       // date format: 'YYYY-MM-DD'
//       return events.filter(event => event.date === date);
//   };

//   // Function to render the calendar
//   const renderCalendar = () => {
//       calendarGrid.innerHTML = ''; // Clear previous grid

//       const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
//       const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
//       const numDaysInMonth = lastDayOfMonth.getDate();
//       const firstWeekday = firstDayOfMonth.getDay(); // 0 for Sunday, 6 for Saturday

//       const monthNames = ["January", "February", "March", "April", "May", "June",
//           "July", "August", "September", "October", "November", "December"];

//       monthDisplay.textContent = monthNames[currentMonth];
//       yearDisplay.textContent = currentYear;

//       // Add padding days before the 1st day of the month
//       for (let i = 0; i < firstWeekday; i++) {
//           const paddingDay = document.createElement('div');
//           paddingDay.classList.add('calendar-day', 'padding');
//           calendarGrid.appendChild(paddingDay);
//       }

//       // Add days of the month
//       for (let day = 1; day <= numDaysInMonth; day++) {
//           const dayElement = document.createElement('div');
//           dayElement.classList.add('calendar-day');
//           dayElement.innerHTML = `<div class="day-number">${day}</div>`;

//           // Check for current day
//           const today = new Date();
//           if (currentYear === today.getFullYear() && currentMonth === today.getMonth() && day === today.getDate()) {
//               dayElement.classList.add('current-day');
//           }

//           // Format date for event lookup (YYYY-MM-DD)
//           const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

//           // Add event indicators
//           const dayEvents = getEventsForDate(dateString);
//           if (dayEvents.length > 0) {
//               const eventIndicatorContainer = document.createElement('div');
//               eventIndicatorContainer.classList.add('event-indicators'); // Optional: add a container if needed

//               dayEvents.forEach(event => {
//                    const indicator = document.createElement('div');
//                    indicator.classList.add('event-indicator');
//                    // Add a data attribute to store the date string for easy lookup later
//                    indicator.dataset.date = dateString;
//                    eventIndicatorContainer.appendChild(indicator);
//               });
//                dayElement.appendChild(eventIndicatorContainer);

//                // Add click listener to days with events
//                dayElement.addEventListener('click', () => {
//                   displayEventDetails(dateString, dayEvents);
//                });
//           } else {
//                // Add click listener to days without events (optional, shows empty popup)
//                dayElement.addEventListener('click', () => {
//                   displayEventDetails(dateString, []);
//                });
//           }


//           calendarGrid.appendChild(dayElement);
//       }
//   };

//   // Function to display event details in a pop-up
//   const displayEventDetails = (dateString, eventsForDate) => {
//        popupDateElement.textContent = dateString;
//        popupEventsListElement.innerHTML = ''; // Clear previous list

//        if (eventsForDate.length > 0) {
//            eventsForDate.forEach(event => {
//                const listItem = document.createElement('li');
//                listItem.innerHTML = `<strong>${event.title}</strong>${event.description ? ': ' + event.description : ''}`;
//                popupEventsListElement.appendChild(listItem);
//            });
//        } else {
//             const listItem = document.createElement('li');
//             listItem.textContent = 'No events for this day.';
//             popupEventsListElement.appendChild(listItem);
//        }

//        eventDetailsPopup.style.display = 'flex'; // Show the pop-up
//   };

//    // Function to hide event details pop-up
//    const hideEventDetails = () => {
//        eventDetailsPopup.style.display = 'none';
//    };

//   // Event listeners for navigation buttons
//   prevMonthButton.addEventListener('click', () => {
//       currentMonth--;
//       if (currentMonth < 0) {
//           currentMonth = 11;
//           currentYear--;
//       }
//       renderCalendar();
//   });

//   nextMonthButton.addEventListener('click', () => {
//       currentMonth++;
//       if (currentMonth > 11) {
//           currentMonth = 0;
//           currentYear++;
//       }
//       renderCalendar();
//   });

//   // Event listener to close the pop-up
//   closePopupButton.addEventListener('click', hideEventDetails);

//   // Event listener to close the pop-up when clicking outside the content
//   window.addEventListener('click', (event) => {
//       if (event.target === eventDetailsPopup) {
//           hideEventDetails();
//       }
//   });

//   // Initial render
//   renderCalendar();
// });


// script.js

document.addEventListener('DOMContentLoaded', () => {
  // --- DOM Element References ---
  const monthDisplay = document.getElementById('monthDisplay');
  const yearDisplay = document.getElementById('yearDisplay');
  const calendarGrid = document.getElementById('calendarGrid');
  const prevMonthBtn = document.getElementById('prevMonthBtn');
  const nextMonthBtn = document.getElementById('nextMonthBtn');
  const addEventCalendarBtn = document.getElementById('addEventCalendarBtn');

  const eventDetailsModal = document.getElementById('eventDetailsModal');
  const eventDetailsDateElement = document.getElementById('eventDetailsDate');
  const eventListElement = document.getElementById('eventList');
  const addEventDayBtn = document.getElementById('addEventDayBtn'); // Button inside details modal

  const eventFormModal = document.getElementById('eventFormModal');
  const formTitleElement = document.getElementById('formTitle');
  const eventForm = document.getElementById('eventForm');
  const eventIdInput = document.getElementById('event-id');
  const eventTitleInput = document.getElementById('event-title');
  const eventDateInput = document.getElementById('event-date');
  const eventTimeInput = document.getElementById('event-time');
  const eventDescriptionInput = document.getElementById('event-description');

  const closeButtons = document.querySelectorAll('.close-button'); // Select all close buttons
  const cancelButtons = document.querySelectorAll('.cancel-button'); // Select all cancel buttons

  // --- State Variables ---
  let currentMonth = new Date().getMonth(); // 0-indexed
  let currentYear = new Date().getFullYear();
  let events = []; // Array to hold all events
  let selectedDate = null; // Store the date of the day clicked to show details

  // --- Local Storage Functions ---
  const STORAGE_KEY = 'calendarEvents';

  const loadEvents = () => {
      const storedEvents = localStorage.getItem(STORAGE_KEY);
      if (storedEvents) {
          // Parse dates back into Date objects if necessary, or keep as strings.
          // Storing as 'YYYY-MM-DD' strings is simpler for lookup.
          // If time is used, parsing might be needed for sorting, but not required for basic display.
          try {
               events = JSON.parse(storedEvents);
               // Optional: Basic validation of loaded data structure
               if (!Array.isArray(events)) {
                   console.error("LocalStorage data is not an array, resetting events.");
                   events = [];
               }
          } catch (e) {
               console.error("Failed to parse events from LocalStorage:", e);
               events = []; // Reset on error
          }
      } else {
          events = []; // Start fresh if nothing in storage
      }
  };

  const saveEvents = () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  };

  // --- Event Management Functions (CRUD) ---

  // Helper to generate a unique ID (simple timestamp-based)
  const generateUniqueId = () => {
      return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };

  // Add a new event
  const addEvent = (eventData) => {
      const newEvent = {
          id: generateUniqueId(), // Assign unique ID
          ...eventData // Include title, date, time, description from form
      };
      events.push(newEvent);
      saveEvents();
      renderCalendar(); // Re-render calendar to show new event indicator
      return newEvent; // Return the newly added event
  };

  // Edit an existing event
  const editEvent = (eventId, updatedEventData) => {
      const index = events.findIndex(event => event.id === eventId);
      if (index !== -1) {
          events[index] = {
              ...events[index], // Keep existing ID
              ...updatedEventData // Overwrite with updated data
          };
          saveEvents();
          renderCalendar(); // Re-render calendar
          // If the details modal is open for this date, refresh it
          if (selectedDate && updatedEventData.date === selectedDate) {
               displayEventDetails(selectedDate);
          } else if (selectedDate) {
               // If the date changed, re-open the modal with potentially empty state
               closeModal(eventDetailsModal);
          }
          return events[index];
      }
      return null; // Event not found
  };

  // Delete an event
  const deleteEvent = (eventId) => {
      const initialLength = events.length;
      events = events.filter(event => event.id !== eventId);
      if (events.length < initialLength) {
          saveEvents();
          renderCalendar(); // Re-render calendar
          // If the details modal is open for this date, refresh it or close if no events left
          if (selectedDate) {
               const remainingEvents = getEventsForDate(selectedDate);
               if(remainingEvents.length > 0) {
                    displayEventDetails(selectedDate);
               } else {
                    closeModal(eventDetailsModal);
               }
          }
          return true; // Successfully deleted
      }
      return false; // Event not found
  };

  // Get events for a specific date
  const getEventsForDate = (dateString) => {
      // dateString format: 'YYYY-MM-DD'
      return events.filter(event => event.date === dateString);
  };

  // --- Calendar Rendering ---
  const renderCalendar = () => {
      calendarGrid.innerHTML = ''; // Clear previous grid content

      const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
      const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
      const numDaysInMonth = lastDayOfMonth.getDate();
      const firstWeekday = firstDayOfMonth.getDay(); // 0 for Sunday, 6 for Saturday

      const monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"];

      monthDisplay.textContent = monthNames[currentMonth];
      yearDisplay.textContent = currentYear;

      // Add padding days before the 1st day of the month
      for (let i = 0; i < firstWeekday; i++) {
          const paddingDay = document.createElement('div');
          paddingDay.classList.add('calendar-day', 'padding');
          calendarGrid.appendChild(paddingDay);
      }

      // Add days of the month
      for (let day = 1; day <= numDaysInMonth; day++) {
          const dayElement = document.createElement('div');
          dayElement.classList.add('calendar-day');
          dayElement.innerHTML = `<div class="day-number">${day}</div>`;

          // Check for current day
          const today = new Date();
          if (currentYear === today.getFullYear() && currentMonth === today.getMonth() && day === today.getDate()) {
              dayElement.classList.add('current-day');
          }

          // Format date string for lookup: YYYY-MM-DD
          const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          dayElement.dataset.date = dateString; // Store date on element

          // Add event indicators
          const dayEvents = getEventsForDate(dateString);
          if (dayEvents.length > 0) {
              const eventIndicatorContainer = document.createElement('div');
              eventIndicatorContainer.classList.add('event-indicators');
              // Add an indicator for each event (or a fixed number + counter)
              dayEvents.forEach(event => {
                   const indicator = document.createElement('div');
                   indicator.classList.add('event-indicator');
                   eventIndicatorContainer.appendChild(indicator);
              });
               dayElement.appendChild(eventIndicatorContainer);
          }

          // Add click listener to days to show details
          dayElement.addEventListener('click', () => {
              selectedDate = dateString; // Store the selected date
              displayEventDetails(dateString);
          });

          calendarGrid.appendChild(dayElement);
      }
  };

  // --- Modal Functions ---

  const openModal = (modalElement) => {
      modalElement.style.display = 'flex'; // Use flex to center content
       // Add listener to close on outside click
      window.addEventListener('click', outsideClickListener);
  };

  const closeModal = (modalElement) => {
      modalElement.style.display = 'none';
       // Remove outside click listener when modal is closed
      window.removeEventListener('click', outsideClickListener);
  };

  // Handle click outside any modal to close it
  const outsideClickListener = (event) => {
      if (event.target.classList.contains('modal')) {
          closeModal(event.target);
      }
  };


  // Function to display event details in the modal
  const displayEventDetails = (dateString) => {
       eventDetailsDateElement.textContent = `Events for ${dateString}`;
       eventListElement.innerHTML = ''; // Clear previous list

       const eventsForDate = getEventsForDate(dateString);

       if (eventsForDate.length > 0) {
           // Sort events by time if time is available
           eventsForDate.sort((a, b) => {
               if (a.time && b.time) {
                   return a.time.localeCompare(b.time);
               }
               if (a.time) return -1; // Event with time comes first
               if (b.time) return 1;  // Event with time comes first
               return 0; // No time, maintain original order (or sort by title etc.)
           });

           eventsForDate.forEach(event => {
               const listItem = document.createElement('li');
               listItem.dataset.eventId = event.id; // Store event ID on the list item
               listItem.innerHTML = `
                   <strong>${event.title}</strong>
                   ${event.time ? `<p>Time: ${event.time}</p>` : ''}
                   ${event.description ? `<p>${event.description}</p>` : ''}
                   <div class="event-actions">
                      <button class="edit-event-btn" aria-label="Edit Event" data-event-id="${event.id}">Edit</button>
                      <button class="delete-event-btn" aria-label="Delete Event" data-event-id="${event.id}">Delete</button>
                   </div>
               `;
               eventListElement.appendChild(listItem);
           });
       } else {
            const listItem = document.createElement('li');
            listItem.textContent = 'No events for this day.';
            eventListElement.appendChild(listItem);
       }

       // Set the date input in the form modal for the "Add Event for this Day" button
       eventDateInput.value = dateString;

       openModal(eventDetailsModal);
  };

  // Function to open the event form modal (for add or edit)
  const openEventForm = (event = null) => { // Pass event object if editing
      eventForm.reset(); // Clear the form
      eventIdInput.value = ''; // Clear hidden ID

      if (event) { // Editing an existing event
          formTitleElement.textContent = 'Edit Event';
          eventIdInput.value = event.id;
          eventTitleInput.value = event.title;
          eventDateInput.value = event.date;
          eventTimeInput.value = event.time || ''; // Handle optional time
          eventDescriptionInput.value = event.description || ''; // Handle optional description
      } else { // Adding a new event
          formTitleElement.textContent = 'Add New Event';
          // If a date was selected in the details modal, pre-fill the date input
          if (selectedDate) {
              eventDateInput.value = selectedDate;
          } else {
               // Default to today if no date selected (e.g., from main "Add" button)
               const today = new Date();
               const year = today.getFullYear();
               const month = String(today.getMonth() + 1).padStart(2, '0');
               const day = String(today.getDate()).padStart(2, '0');
               eventDateInput.value = `${year}-${month}-${day}`;
          }
      }

      openModal(eventFormModal);
  };

  // --- Event Listeners ---

  // Navigation buttons
  prevMonthBtn.addEventListener('click', () => {
      currentMonth--;
      if (currentMonth < 0) {
          currentMonth = 11;
          currentYear--;
      }
      renderCalendar();
  });

  nextMonthBtn.addEventListener('click', () => {
      currentMonth++;
      if (currentMonth > 11) {
          currentMonth = 0;
          currentYear++;
      }
      renderCalendar();
  });

  // "Add New Event" button (from calendar view)
  addEventCalendarBtn.addEventListener('click', () => {
      selectedDate = null; // Clear selected date when adding from main button
      openEventForm();
  });

  // "Add Event for this Day" button (from details modal)
  addEventDayBtn.addEventListener('click', () => {
       // selectedDate is already set by displayEventDetails
       closeModal(eventDetailsModal); // Close details modal first
       openEventForm(); // Open form modal (date will be pre-filled)
  });


  // Close modal buttons (using event delegation for multiple buttons)
  closeButtons.forEach(button => {
      button.addEventListener('click', (event) => {
          const modalId = event.target.dataset.modal;
          const modal = document.getElementById(modalId);
          if (modal) {
              closeModal(modal);
          }
      });
  });

   // Cancel buttons (using event delegation)
   cancelButtons.forEach(button => {
       button.addEventListener('click', (event) => {
           const modalId = event.target.dataset.modal;
           const modal = document.getElementById(modalId);
           if (modal) {
               closeModal(modal);
           }
       });
   });


  // Event Form Submission
  eventForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission

      const eventId = eventIdInput.value;
      const eventData = {
          title: eventTitleInput.value.trim(),
          date: eventDateInput.value, // YYYY-MM-DD format from date input
          time: eventTimeInput.value.trim() || null, // HH:MM format from time input, or null
          description: eventDescriptionInput.value.trim() || null // Store empty description as null or empty string
      };

      // Basic validation
      if (!eventData.title || !eventData.date) {
           alert('Event title and date are required.');
           return;
      }

      if (eventId) { // Editing existing event
          editEvent(eventId, eventData);
      } else { // Adding new event
          const newEvent = addEvent(eventData);
           // After adding, if the details modal for this date is open, update it
           if (selectedDate === newEvent.date) {
               displayEventDetails(selectedDate);
           }
      }

      closeModal(eventFormModal); // Close form modal
  });

  // Event Delegation for Edit/Delete buttons within the Event Details Modal
  // Listen for clicks on the event list ul element
  eventListElement.addEventListener('click', (event) => {
      const target = event.target;

      if (target.classList.contains('edit-event-btn')) {
          const eventIdToEdit = target.dataset.eventId;
          const eventToEdit = events.find(event => event.id === eventIdToEdit);
          if (eventToEdit) {
              closeModal(eventDetailsModal); // Close details modal
              openEventForm(eventToEdit); // Open form modal with event data
          }
      } else if (target.classList.contains('delete-event-btn')) {
          const eventIdToDelete = target.dataset.eventId;
          if (confirm('Are you sure you want to delete this event?')) {
              deleteEvent(eventIdToDelete);
              // displayEventDetails is called inside deleteEvent if selectedDate is still valid
          }
      }
  });


  // --- Initialization ---
  loadEvents(); // Load events from localStorage on startup
  renderCalendar(); // Render the initial calendar view
});
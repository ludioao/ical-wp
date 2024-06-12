/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@event-calendar/core/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@event-calendar/core/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DAY_IN_SECONDS: () => (/* binding */ DAY_IN_SECONDS),
/* harmony export */   addDay: () => (/* binding */ addDay),
/* harmony export */   addDuration: () => (/* binding */ addDuration),
/* harmony export */   ancestor: () => (/* binding */ ancestor),
/* harmony export */   assign: () => (/* binding */ assign),
/* harmony export */   bgEvent: () => (/* binding */ bgEvent),
/* harmony export */   btnTextDay: () => (/* binding */ btnTextDay),
/* harmony export */   btnTextMonth: () => (/* binding */ btnTextMonth),
/* harmony export */   btnTextWeek: () => (/* binding */ btnTextWeek),
/* harmony export */   btnTextYear: () => (/* binding */ btnTextYear),
/* harmony export */   ceil: () => (/* binding */ ceil),
/* harmony export */   cloneDate: () => (/* binding */ cloneDate),
/* harmony export */   cloneEvent: () => (/* binding */ cloneEvent),
/* harmony export */   copyTime: () => (/* binding */ copyTime),
/* harmony export */   createDate: () => (/* binding */ createDate),
/* harmony export */   createDuration: () => (/* binding */ createDuration),
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   createEventChunk: () => (/* binding */ createEventChunk),
/* harmony export */   createEventClasses: () => (/* binding */ createEventClasses),
/* harmony export */   createEventContent: () => (/* binding */ createEventContent),
/* harmony export */   createEventSources: () => (/* binding */ createEventSources),
/* harmony export */   createEvents: () => (/* binding */ createEvents),
/* harmony export */   createResources: () => (/* binding */ createResources),
/* harmony export */   createSlotTimeLimits: () => (/* binding */ createSlotTimeLimits),
/* harmony export */   createTimes: () => (/* binding */ createTimes),
/* harmony export */   createView: () => (/* binding */ createView),
/* harmony export */   datesEqual: () => (/* binding */ datesEqual),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   "default": () => (/* binding */ Calendar),
/* harmony export */   eventIntersects: () => (/* binding */ eventIntersects),
/* harmony export */   floor: () => (/* binding */ floor),
/* harmony export */   flushDebounce: () => (/* binding */ flushDebounce),
/* harmony export */   getElementWithPayload: () => (/* binding */ getElementWithPayload),
/* harmony export */   getPayload: () => (/* binding */ getPayload),
/* harmony export */   ghostEvent: () => (/* binding */ ghostEvent),
/* harmony export */   hasPayload: () => (/* binding */ hasPayload),
/* harmony export */   hasYScroll: () => (/* binding */ hasYScroll),
/* harmony export */   height: () => (/* binding */ height),
/* harmony export */   helperEvent: () => (/* binding */ helperEvent),
/* harmony export */   intl: () => (/* binding */ intl),
/* harmony export */   intlRange: () => (/* binding */ intlRange),
/* harmony export */   keyEnter: () => (/* binding */ keyEnter),
/* harmony export */   keys: () => (/* binding */ keys),
/* harmony export */   listView: () => (/* binding */ listView),
/* harmony export */   max: () => (/* binding */ max),
/* harmony export */   min: () => (/* binding */ min),
/* harmony export */   nextClosestDay: () => (/* binding */ nextClosestDay),
/* harmony export */   noTimePart: () => (/* binding */ noTimePart),
/* harmony export */   outsideEvent: () => (/* binding */ outsideEvent),
/* harmony export */   pointerEvent: () => (/* binding */ pointerEvent),
/* harmony export */   prepareEventChunks: () => (/* binding */ prepareEventChunks),
/* harmony export */   prevClosestDay: () => (/* binding */ prevClosestDay),
/* harmony export */   previewEvent: () => (/* binding */ previewEvent),
/* harmony export */   rect: () => (/* binding */ rect),
/* harmony export */   repositionEvent: () => (/* binding */ repositionEvent),
/* harmony export */   runReposition: () => (/* binding */ runReposition),
/* harmony export */   setContent: () => (/* binding */ setContent),
/* harmony export */   setMidnight: () => (/* binding */ setMidnight),
/* harmony export */   setPayload: () => (/* binding */ setPayload),
/* harmony export */   sortEventChunks: () => (/* binding */ sortEventChunks),
/* harmony export */   subtractDay: () => (/* binding */ subtractDay),
/* harmony export */   subtractDuration: () => (/* binding */ subtractDuration),
/* harmony export */   symbol: () => (/* binding */ symbol),
/* harmony export */   task: () => (/* binding */ task),
/* harmony export */   themeView: () => (/* binding */ themeView),
/* harmony export */   timelineView: () => (/* binding */ timelineView),
/* harmony export */   toEventWithLocalDates: () => (/* binding */ toEventWithLocalDates),
/* harmony export */   toISOString: () => (/* binding */ toISOString),
/* harmony export */   toLocalDate: () => (/* binding */ toLocalDate),
/* harmony export */   toSeconds: () => (/* binding */ toSeconds),
/* harmony export */   toViewWithLocalDates: () => (/* binding */ toViewWithLocalDates),
/* harmony export */   viewResources: () => (/* binding */ viewResources)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/src/runtime/index.js");
/* harmony import */ var svelte_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte/store */ "./node_modules/svelte/src/runtime/store/index.js");




function keyEnter(fn) {
    return function (e) {
        return e.key === 'Enter' || e.key === ' ' && !e.preventDefault()  // prevent page scroll down
            ? fn.call(this, e)
            : undefined;
    };
}

function setContent(node, content) {
    let actions = {
        update(content) {
            if (typeof content == 'string') {
                node.innerText = content;
            } else if (content?.domNodes) {
                node.replaceChildren(...content.domNodes);
            } else if (content?.html) {
                node.innerHTML = content.html;
            }
        }
    };
    actions.update(content);

    return actions;
}

/** Dispatch event occurred outside of node */
function outsideEvent(node, type) {

    const handlePointerDown = jsEvent => {
        if (node && !node.contains(jsEvent.target)) {
            node.dispatchEvent(
                new CustomEvent(type + 'outside', {detail: {jsEvent}})
            );
        }
    };

    document.addEventListener(type, handlePointerDown, true);

    return {
        destroy() {
            document.removeEventListener(type, handlePointerDown, true);
        }
    };
}

const DAY_IN_SECONDS = 86400;

function createDate(input = undefined) {
    if (input !== undefined) {
        return input instanceof Date ? _fromLocalDate(input) : _fromISOString(input);
    }

    return _fromLocalDate(new Date());
}

function createDuration(input) {
    if (typeof input === 'number') {
        input = {seconds: input};
    } else if (typeof input === 'string') {
        // Expected format hh[:mm[:ss]]
        let seconds = 0, exp = 2;
        for (let part of input.split(':', 3)) {
            seconds += parseInt(part, 10) * Math.pow(60, exp--);
        }
        input = {seconds};
    } else if (input instanceof Date) {
        input = {hours: input.getUTCHours(), minutes: input.getUTCMinutes(), seconds: input.getUTCSeconds()};
    }

    let weeks = input.weeks || input.week || 0;

    return {
        years: input.years || input.year || 0,
        months: input.months || input.month || 0,
        days: weeks * 7 + (input.days || input.day || 0),
        seconds: (input.hours || input.hour || 0) * 60 * 60 +
            (input.minutes || input.minute || 0) * 60 +
            (input.seconds || input.second || 0),
        inWeeks: !!weeks
    };
}

function cloneDate(date) {
    return new Date(date.getTime());
}

function addDuration(date, duration, x = 1) {
    date.setUTCFullYear(date.getUTCFullYear() + x * duration.years);
    let month = date.getUTCMonth() + x * duration.months;
    date.setUTCMonth(month);
    month %= 12;
    if (month < 0) {
        month += 12;
    }
    while (date.getUTCMonth() !== month) {
        subtractDay(date);
    }
    date.setUTCDate(date.getUTCDate() + x * duration.days);
    date.setUTCSeconds(date.getUTCSeconds() + x * duration.seconds);

    return date;
}

function subtractDuration(date, duration, x = 1) {
    return addDuration(date, duration, -x);
}

function addDay(date, x = 1) {
    date.setUTCDate(date.getUTCDate() + x);

    return date;
}

function subtractDay(date, x = 1) {
    return addDay(date, -x);
}

function setMidnight(date) {
    date.setUTCHours(0, 0, 0, 0);

    return date;
}

function toLocalDate(date) {
    return new Date(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds()
    );
}

function toISOString(date, len = 19) {
    return date.toISOString().substring(0, len);
}

function datesEqual(date1, ...dates2) {
    return dates2.every(date2 => date1.getTime() === date2.getTime());
}

function nextClosestDay(date, day) {
    let diff = day - date.getUTCDay();
    date.setUTCDate(date.getUTCDate() + (diff >= 0 ? diff : diff + 7));
    return date;
}

function prevClosestDay(date, day) {
    let diff = day - date.getUTCDay();
    date.setUTCDate(date.getUTCDate() + (diff <= 0 ? diff : diff - 7));
    return date;
}

/**
 * Check whether given date is string which contains no time part
  */
function noTimePart(date) {
    return typeof date === 'string' && date.length <= 10;
}

/**
 * Copy time from one date to another
 */
function copyTime(toDate, fromDate) {
    toDate.setUTCHours(fromDate.getUTCHours(), fromDate.getUTCMinutes(), fromDate.getUTCSeconds(), 0);

    return toDate;
}

/**
 * Get duration value in seconds or default value if duration is undefined
 */
function toSeconds(duration, defaultValue = 0) {
    return duration?.seconds ?? defaultValue;
}

/**
 * Private functions
 */

function _fromLocalDate(date) {
    return new Date(Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
    ));
}

function _fromISOString(str) {
    const parts = str.match(/\d+/g);
    return new Date(Date.UTC(
        Number(parts[0]),
        Number(parts[1]) - 1,
        Number(parts[2]),
        Number(parts[3] || 0),
        Number(parts[4] || 0),
        Number(parts[5] || 0)
    ));
}

function debounce(fn, handle, queueStore) {
    queueStore.update(queue => queue.set(handle, fn));
}

function flushDebounce(queue) {
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(queue);
    queue.clear();
}

function task(fn, handle, tasks) {
    handle ??= fn;
    if (!tasks.has(handle)) {
        tasks.set(handle, setTimeout(() => {
            tasks.delete(handle);
            fn();
        }));
    }
}

function assign(...args) {
    return Object.assign(...args);
}

function keys(object) {
    return Object.keys(object);
}

function floor(value) {
    return Math.floor(value);
}

function ceil(value) {
    return Math.ceil(value);
}

function min(...args) {
    return Math.min(...args);
}

function max(...args) {
    return Math.max(...args);
}

function symbol() {
    return Symbol('ec');
}

function createElement(tag, className, content, attrs = []) {
    let el = document.createElement(tag);
    el.className = className;
    if (typeof content == 'string') {
        el.innerText = content;
    } else if (content.domNodes) {
        el.replaceChildren(...content.domNodes);
    } else if (content.html) {
        el.innerHTML = content.html;
    }
    for (let attr of attrs) {
        el.setAttribute(...attr);
    }
    return el;
}

function hasYScroll(el) {
    return el.scrollHeight > el.clientHeight;
}

function rect(el) {
    return el.getBoundingClientRect();
}

function ancestor(el, up) {
    while (up--) {
        el = el.parentElement;
    }
    return el;
}

function height(el) {
    return rect(el).height;
}

let payloadProp = symbol();
function setPayload(el, payload) {
    el[payloadProp] = payload;
}

function hasPayload(el) {
    return !!el?.[payloadProp];
}

function getPayload(el) {
    return el[payloadProp];
}

function getElementWithPayload(x, y, root = document) {
    for (let el of root.elementsFromPoint(x, y)) {
        if (hasPayload(el)) {
            return el;
        }
        /** @see https://github.com/vkurko/calendar/issues/142 */
        if (el.shadowRoot) {
            let shadowEl = getElementWithPayload(x, y, el.shadowRoot);
            if (shadowEl) {
                return shadowEl;
            }
        }
    }
    return null;
}

function createView(view, _viewTitle, _currentRange, _activeRange) {
    return {
        type: view,
        title: _viewTitle,
        currentStart: _currentRange.start,
        currentEnd: _currentRange.end,
        activeStart: _activeRange.start,
        activeEnd: _activeRange.end,
        calendar: undefined
    };
}

function toViewWithLocalDates(view) {
    view = assign({}, view);
    view.currentStart = toLocalDate(view.currentStart);
    view.currentEnd = toLocalDate(view.currentEnd);
    view.activeStart = toLocalDate(view.activeStart);
    view.activeEnd = toLocalDate(view.activeEnd);

    return view;
}

function listView(view) {
    return view.startsWith('list');
}

function timelineView(view) {
    return view.includes('Timeline');
}

let eventId = 1;
function createEvents(input) {
    return input.map(event => {
        let result = {
            id: 'id' in event ? String(event.id) : `{generated-${eventId++}}`,
            resourceIds: Array.isArray(event.resourceIds)
                ? event.resourceIds.map(String)
                : ('resourceId' in event ? [String(event.resourceId)] : []),
            allDay: event.allDay ?? (noTimePart(event.start) && noTimePart(event.end)),
            start: createDate(event.start),
            end: createDate(event.end),
            title: event.title || '',
            titleHTML: event.titleHTML || '',
            editable: event.editable,
            startEditable: event.startEditable,
            durationEditable: event.durationEditable,
            display: event.display || 'auto',
            extendedProps: event.extendedProps || {},
            backgroundColor: event.backgroundColor || event.color,
            textColor: event.textColor
        };

        if (result.allDay) {
            // Make sure all-day events start and end at midnight
            setMidnight(result.start);
            let end = cloneDate(result.end);
            setMidnight(result.end);
            if (
                !datesEqual(result.end, end) ||
                datesEqual(result.end, result.start)  /** @see https://github.com/vkurko/calendar/issues/50 */
            ) {
                addDay(result.end);
            }
        }

        return result;
    });
}

function createEventSources(input) {
    return input.map(source => ({
        events: source.events,
        url: (source.url && source.url.trimEnd('&')) || '',
        method: (source.method && source.method.toUpperCase()) || 'GET',
        extraParams: source.extraParams || {}
    }));
}

function createEventChunk(event, start, end) {
    return {
        start: event.start > start ? event.start : start,
        end: event.end < end ? event.end : end,
        event
    };
}

function sortEventChunks(chunks) {
    // Sort by start date (all-day events always on top)
    chunks.sort((a, b) => a.start - b.start || b.event.allDay - a.event.allDay);
}

function createEventContent(chunk, displayEventEnd, eventContent, theme, _intlEventTime, _view) {
    let timeText = _intlEventTime.formatRange(
        chunk.start,
        displayEventEnd && chunk.event.display !== 'pointer'
            ? copyTime(cloneDate(chunk.start), chunk.end)  // make Intl.formatRange output only the time part
            : chunk.start
    );
    let content;

    if (eventContent) {
        content = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(eventContent)
            ? eventContent({
                event: toEventWithLocalDates(chunk.event),
                timeText,
                view: toViewWithLocalDates(_view)
            })
            : eventContent;
    } else {
        let domNodes;
        switch (chunk.event.display) {
            case 'background':
                domNodes = [];
                break;
            case 'pointer':
                domNodes = [createTimeElement(timeText, chunk, theme)];
                break;
            default:
                domNodes = [
                    ...chunk.event.allDay ? [] : [createTimeElement(timeText, chunk, theme)],
                    createElement('h4', theme.eventTitle, chunk.event.title)
                ];
        }
        content = {domNodes};
    }

    return [timeText, content];
}

function createTimeElement(timeText, chunk, theme) {
    return createElement(
        'time',
        theme.eventTime,
        timeText,
        [['datetime', toISOString(chunk.start)]]
    );
}

function createEventClasses(eventClassNames, event, _view) {
    if (eventClassNames) {
        if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(eventClassNames)) {
            eventClassNames = eventClassNames({
                event: toEventWithLocalDates(event),
                view: toViewWithLocalDates(_view)
            });
        }
        return Array.isArray(eventClassNames) ? eventClassNames : [eventClassNames];
    }
    return [];
}

function toEventWithLocalDates(event) {
    return _cloneEvent(event, toLocalDate);
}

function cloneEvent(event) {
    return _cloneEvent(event, cloneDate);
}

function _cloneEvent(event, dateFn) {
    event = assign({}, event);
    event.start = dateFn(event.start);
    event.end = dateFn(event.end);

    return event;
}

/**
 * Prepare event chunks for month view and all-day slot in week view
 */
function prepareEventChunks(chunks, hiddenDays) {
    let longChunks = {};

    if (chunks.length) {
        sortEventChunks(chunks);

        let prevChunk;
        for (let chunk of chunks) {
            let dates = [];
            let date = setMidnight(cloneDate(chunk.start));
            while (chunk.end > date) {
                if (!hiddenDays.includes(date.getUTCDay())) {
                    dates.push(cloneDate(date));
                    if (dates.length > 1) {
                        let key = date.getTime();
                        if (longChunks[key]) {
                            longChunks[key].chunks.push(chunk);
                        } else {
                            longChunks[key] = {
                                sorted: false,
                                chunks: [chunk]
                            };
                        }
                    }
                }
                addDay(date);
            }
            if (dates.length) {
                chunk.date = dates[0];
                chunk.days = dates.length;
                chunk.dates = dates;
            } else {
                chunk.date = setMidnight(cloneDate(chunk.start));
                chunk.days = 1;
                chunk.dates = [chunk.date];
            }

            if (prevChunk && datesEqual(prevChunk.date, chunk.date)) {
                chunk.prev = prevChunk;
            }
            prevChunk = chunk;
        }
    }

    return longChunks;
}

function repositionEvent(chunk, longChunks, height) {
    chunk.top = 0;
    if (chunk.prev) {
        chunk.top = chunk.prev.bottom + 1;
    }
    chunk.bottom = chunk.top + height;
    let margin = 1;
    let key = chunk.date.getTime();
    if (longChunks[key]) {
        if (!longChunks[key].sorted) {
            longChunks[key].chunks.sort((a, b) => a.top - b.top);
            longChunks[key].sorted = true;
        }
        for (let longChunk of longChunks[key].chunks) {
            if (chunk.top < longChunk.bottom && chunk.bottom > longChunk.top) {
                let offset = longChunk.bottom - chunk.top + 1;
                margin += offset;
                chunk.top += offset;
                chunk.bottom += offset;
            }
        }
    }

    return margin;
}

function runReposition(refs, data) {
    refs.length = data.length;
    let result = [];
    for (let ref of refs) {
        result.push(ref?.reposition?.());
    }
    return result;
}

/**
 * Check whether the event intersects with the given date range and resource
 * @param event
 * @param start
 * @param end
 * @param [resource]
 * @return boolean
 */
function eventIntersects(event, start, end, resource) {
    return event.start < end && event.end > start && (
        resource === undefined || event.resourceIds.includes(resource.id)
    );
}

function helperEvent(display) {
    return previewEvent(display) || ghostEvent(display) || pointerEvent(display);
}

function bgEvent(display) {
    return display === 'background';
}

function previewEvent(display) {
    return display === 'preview';
}

function ghostEvent(display) {
    return display === 'ghost';
}

function pointerEvent(display) {
    return display === 'pointer';
}

function btnTextDay(text) {
    return btnText(text, 'day');
}

function btnTextWeek(text) {
    return btnText(text, 'week');
}

function btnTextMonth(text) {
    return btnText(text, 'month');
}

function btnTextYear(text) {
    return btnText(text, 'year');
}

function btnText(text, period) {
    return {
        ...text,
        next: 'Next ' + period,
        prev: 'Previous ' + period
    };
}

function themeView(view) {
    return theme => ({...theme, view});
}

function createResources(input) {
    return input.map(resource => ({
        id: String(resource.id),
        title: resource.title || '',
        titleHTML: resource.titleHTML || '',
        eventBackgroundColor: resource.eventBackgroundColor,
        eventTextColor: resource.eventTextColor
    }));
}

function intl(locale, format) {
    return (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.derived)([locale, format], ([$locale, $format]) => {
        let intl = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)($format)
            ? {format: $format}
            : new Intl.DateTimeFormat($locale, $format);
        return {
            format: date => intl.format(toLocalDate(date))
        };
    });
}

function intlRange(locale, format) {
    return (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.derived)([locale, format], ([$locale, $format]) => {
        let formatRange;
        if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)($format)) {
            formatRange = $format;
        } else {
            let intl = new Intl.DateTimeFormat($locale, $format);
            formatRange = (start, end) => {
                if (start <= end) {
                    return intl.formatRange(start, end);
                } else {
                    // In iOS 16 and older, intl.formatRange() throws an exception if the start date is later than the end date.
                    // Therefore, we first swap the parameters, and then swap the resulting parts.
                    /** @see https://github.com/vkurko/calendar/issues/227 */
                    let parts = intl.formatRangeToParts(end, start);
                    let result = '';
                    let sources = ['startRange', 'endRange'];
                    let processed = [false, false];
                    for (let part of parts) {
                        let i = sources.indexOf(part.source);
                        if (i >= 0) {
                            if (!processed[i]) {
                                result += _getParts(sources[1 - i], parts);
                                processed[i] = true;
                            }
                        } else {
                            result += part.value;
                        }
                    }
                    return result;
                }
            };
        }
        return {
            formatRange: (start, end) => formatRange(toLocalDate(start), toLocalDate(end))
        };
    });
}

function _getParts(source, parts) {
    let result = '';
    for (let part of parts) {
        if (part.source == source) {
            result += part.value;
        }
    }
    return result;
}

function viewResources(state) {
    return (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.derived)(
        [state.resources, state.filterResourcesWithEvents, state._events, state._activeRange],
        ([$resources, $filterResourcesWithEvents, $_events, $_activeRange]) => {
            let result = $resources;

            if ($filterResourcesWithEvents) {
                result = $resources.filter(resource => {
                    for (let event of $_events) {
                        if (
                            event.display !== 'background' &&
                            event.resourceIds.includes(resource.id) &&
                            event.start < $_activeRange.end &&
                            event.end > $_activeRange.start
                        ) {
                            return true;
                        }
                    }
                    return false;
                });
            }

            if (!result.length) {
                result = createResources([{}]);
            }

            return result;
        }
    );
}

function createTimes(date, $slotDuration, $_slotTimeLimits, $_intlSlotLabel, $_intlDayHeaderAL) {
    date = cloneDate(date);
    let compact = $slotDuration.seconds < 3600;
    let times = [];
    let end = cloneDate(date);
    let i = 1;
    addDuration(date, $_slotTimeLimits.min);
    addDuration(end, $_slotTimeLimits.max);
    while (date < end) {
        times.push([
            toISOString(date),
            $_intlSlotLabel.format(date),
            times.length && (i || !compact),
            $_intlDayHeaderAL && $_intlDayHeaderAL.format(date)
        ]);
        addDuration(date, $slotDuration);
        i = 1 - i;
    }

    return times;
}

function createSlotTimeLimits($slotMinTime, $slotMaxTime, $flexibleSlotTimeLimits, $_viewDates, $_events) {
    let min$1 = createDuration($slotMinTime);
    let max$1 = createDuration($slotMaxTime);

    if ($flexibleSlotTimeLimits) {
        // If slotMaxTime goes past midnight, then extend it back by a maximum of 24 hours
        let minMin = createDuration(min(toSeconds(min$1), max(0, toSeconds(max$1) - DAY_IN_SECONDS)));
        let maxMax = createDuration(max(toSeconds(max$1), toSeconds(minMin) + DAY_IN_SECONDS));
        let filter = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)($flexibleSlotTimeLimits?.eventFilter)
            ? $flexibleSlotTimeLimits.eventFilter
            : event => !bgEvent(event.display);
        loop: for (let date of $_viewDates) {
            let start = addDuration(cloneDate(date), min$1);
            let end = addDuration(cloneDate(date), max$1);
            let minStart = addDuration(cloneDate(date), minMin);
            let maxEnd = addDuration(cloneDate(date), maxMax);
            for (let event of $_events) {
                if (!event.allDay && filter(event) && event.start < maxEnd && event.end > minStart) {
                    if (event.start < start) {
                        let seconds = max((event.start - date) / 1000, toSeconds(minMin));
                        if (seconds < toSeconds(min$1)) {
                            min$1.seconds = seconds;
                        }
                    }
                    if (event.end > end) {
                        let seconds = min((event.end - date) / 1000, toSeconds(maxMax));
                        if (seconds > toSeconds(max$1)) {
                            max$1.seconds = seconds;
                        }
                    }
                    if (toSeconds(min$1) === toSeconds(minMin) && toSeconds(max$1) === toSeconds(maxMax)) {
                        break loop;
                    }
                }
            }
        }
    }

    return {min: min$1, max: max$1};
}

function createOptions(plugins) {
    let options = {
        allDayContent: undefined,
        allDaySlot: true,
        buttonText: {
            today: 'today',
        },
        customButtons: {},
        date: new Date(),
        datesSet: undefined,
        dayHeaderFormat: {
            weekday: 'short',
            month: 'numeric',
            day: 'numeric'
        },
        dayHeaderAriaLabelFormat: {
            dateStyle: 'long'
        },
        displayEventEnd: true,
        duration: {weeks: 1},
        events: [],
        eventAllUpdated: undefined,
        eventBackgroundColor: undefined,
        eventTextColor: undefined,
        eventClassNames: undefined,
        eventClick: undefined,
        eventColor: undefined,
        eventContent: undefined,
        eventDidMount: undefined,
        eventMouseEnter: undefined,
        eventMouseLeave: undefined,
        eventSources: [],
        eventTimeFormat: {
            hour: 'numeric',
            minute: '2-digit'
        },
        filterResourcesWithEvents: false,
        firstDay: 0,
        flexibleSlotTimeLimits: false,  // ec option
        headerToolbar: {
            start: 'title',
            center: '',
            end: 'today prev,next'
        },
        height: undefined,
        hiddenDays: [],
        highlightedDates: [],  // ec option
        lazyFetching: true,
        loading: undefined,
        locale: undefined,
        nowIndicator: false,
        resourceLabelContent: undefined,
        resourceLabelDidMount: undefined,
        resources: [],
        selectable: false,
        scrollTime: '06:00:00',
        slotDuration: '00:30:00',
        slotEventOverlap: true,
        slotHeight: 24,  // ec option
        slotLabelFormat: {
            hour: 'numeric',
            minute: '2-digit'
        },
        slotMaxTime: '24:00:00',
        slotMinTime: '00:00:00',
        slotWidth: 52,
        theme: {
            allDay: 'ec-all-day',
            active: 'ec-active',
            bgEvent: 'ec-bg-event',
            bgEvents: 'ec-bg-events',
            body: 'ec-body',
            button: 'ec-button',
            buttonGroup: 'ec-button-group',
            calendar: 'ec',
            compact: 'ec-compact',
            content: 'ec-content',
            day: 'ec-day',
            dayHead: 'ec-day-head',
            days: 'ec-days',
            event: 'ec-event',
            eventBody: 'ec-event-body',
            eventTime: 'ec-event-time',
            eventTitle: 'ec-event-title',
            events: 'ec-events',
            extra: 'ec-extra',
            handle: 'ec-handle',
            header: 'ec-header',
            hiddenScroll: 'ec-hidden-scroll',
            highlight: 'ec-highlight',
            icon: 'ec-icon',
            line: 'ec-line',
            lines: 'ec-lines',
            nowIndicator: 'ec-now-indicator',
            otherMonth: 'ec-other-month',
            resource: 'ec-resource',
            sidebar: 'ec-sidebar',
            sidebarTitle: 'ec-sidebar-title',
            today: 'ec-today',
            time: 'ec-time',
            title: 'ec-title',
            toolbar: 'ec-toolbar',
            view: '',
            weekdays: ['ec-sun', 'ec-mon', 'ec-tue', 'ec-wed', 'ec-thu', 'ec-fri', 'ec-sat'],
            withScroll: 'ec-with-scroll'
        },
        titleFormat: {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        },
        view: undefined,
        viewDidMount: undefined,
        views: {}
    };

    for (let plugin of plugins) {
        plugin.createOptions?.(options);
    }

    return options;
}

function createParsers(plugins) {
    let parsers = {
        date: date => setMidnight(createDate(date)),
        duration: createDuration,
        events: createEvents,
        eventSources: createEventSources,
        hiddenDays: days => [...new Set(days)],
        highlightedDates: dates => dates.map(createDate),
        resources: createResources,
        scrollTime: createDuration,
        slotDuration: createDuration,
        slotMaxTime: createDuration,
        slotMinTime: createDuration
    };

    for (let plugin of plugins) {
        plugin.createParsers?.(parsers);
    }

    return parsers;
}

function diff(options, prevOptions) {
    let diff = [];
    for (let key of keys(options)) {
        if (options[key] !== prevOptions[key]) {
            diff.push([key, options[key]]);
        }
    }
    assign(prevOptions, options);

    return diff;
}

function dayGrid(state) {
    return (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.derived)(state.view, $view => $view?.startsWith('dayGrid'));
}

function activeRange(state) {
    return (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.derived)(
        [state._currentRange, state.firstDay, state.slotMaxTime, state._dayGrid],
        ([$_currentRange, $firstDay, $slotMaxTime, $_dayGrid]) => {
            let start = cloneDate($_currentRange.start);
            let end = cloneDate($_currentRange.end);

            if ($_dayGrid) {
                // First day of week
                prevClosestDay(start, $firstDay);
                nextClosestDay(end, $firstDay);
            } else if ($slotMaxTime.days || $slotMaxTime.seconds > DAY_IN_SECONDS) {
                addDuration(subtractDay(end), $slotMaxTime);
                let start2 = subtractDay(cloneDate(end));
                if (start2 < start) {
                    start = start2;
                }
            }

            return {start, end};
        }
    );
}

function currentRange(state) {
    return (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.derived)(
        [state.date, state.duration, state.firstDay, state._dayGrid],
        ([$date, $duration, $firstDay, $_dayGrid]) => {
            let start = cloneDate($date), end;
            if ($_dayGrid) {
                start.setUTCDate(1);
            } else if ($duration.inWeeks) {
                // First day of week
                prevClosestDay(start, $firstDay);
            }
            end = addDuration(cloneDate(start), $duration);

            return {start, end};
        }
    );
}

function viewDates(state) {
    return (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.derived)([state._activeRange, state.hiddenDays], ([$_activeRange, $hiddenDays]) => {
        let dates = [];
        let date = setMidnight(cloneDate($_activeRange.start));
        let end = setMidnight(cloneDate($_activeRange.end));
        while (date < end) {
            if (!$hiddenDays.includes(date.getUTCDay())) {
                dates.push(cloneDate(date));
            }
            addDay(date);
        }
        if (!dates.length && $hiddenDays.length && $hiddenDays.length < 7) {
            // Try to move the date
            state.date.update(date => {
                while ($hiddenDays.includes(date.getUTCDay())) {
                    addDay(date);
                }
                return date;
            });
            dates = (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.get)(state._viewDates);
        }

        return dates;
    });
}

function viewTitle(state) {
    return (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.derived)(
        [state.date, state._activeRange, state._intlTitle, state._dayGrid],
        ([$date, $_activeRange, $_intlTitle, $_dayGrid]) => {
            return $_dayGrid
                ? $_intlTitle.formatRange($date, $date)
                : $_intlTitle.formatRange($_activeRange.start, subtractDay(cloneDate($_activeRange.end)));
        }
    );
}

function view(state) {
    return (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.derived)([state.view, state._viewTitle, state._currentRange, state._activeRange], args => createView(...args));
}

function events(state) {
    let _events = (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.writable)([]);
    let abortController;
    let fetching = 0;
    let debounceHandle = {};
    (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.derived)(
        [state.events, state.eventSources, state._activeRange, state._fetchedRange, state.lazyFetching, state.loading],
        (values, set) => debounce(() => {
            let [$events, $eventSources, $_activeRange, $_fetchedRange, $lazyFetching, $loading] = values;
            if (!$eventSources.length) {
                set($events);
                return;
            }
            // Do not fetch if new range is within the previous one
            if (!$_fetchedRange.start || $_fetchedRange.start > $_activeRange.start || $_fetchedRange.end < $_activeRange.end || !$lazyFetching) {
                if (abortController) {
                    // Abort previous request
                    abortController.abort();
                }
                // Create new abort controller
                abortController = new AbortController();
                // Call loading hook
                if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)($loading) && !fetching) {
                    $loading(true);
                }
                let stopLoading = () => {
                    if (--fetching === 0 && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)($loading)) {
                        $loading(false);
                    }
                };
                let events = [];
                // Prepare handlers
                let failure = e => stopLoading();
                let success = data => {
                    events = events.concat(createEvents(data));
                    set(events);
                    stopLoading();
                };
                // Prepare other stuff
                let startStr = toISOString($_activeRange.start);
                let endStr = toISOString($_activeRange.end);
                // Loop over event sources
                for (let source of $eventSources) {
                    if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(source.events)) {
                        // Events as a function
                        let result = source.events({
                            start: toLocalDate($_activeRange.start),
                            end: toLocalDate($_activeRange.end),
                            startStr,
                            endStr
                        }, success, failure);
                        if (result !== undefined) {
                            Promise.resolve(result).then(success, failure);
                        }
                    } else {
                        // Events as a JSON feed
                        // Prepare params
                        let params = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(source.extraParams) ? source.extraParams() : assign({}, source.extraParams);
                        params.start = startStr;
                        params.end = endStr;
                        params = new URLSearchParams(params);
                        // Prepare fetch
                        let url = source.url, headers = {}, body;
                        if (['GET', 'HEAD'].includes(source.method)) {
                            url += (url.includes('?') ? '&' : '?') + params;
                        } else {
                            headers['content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
                            body = String(params);  // Safari 10.1 doesn't convert to string automatically
                        }
                        // Do the fetch
                        fetch(url, {method: source.method, headers, body, signal: abortController.signal, credentials: 'same-origin'})
                            .then(response => response.json())
                            .then(success)
                            .catch(failure);
                    }
                    ++fetching;
                }
                // Save current range for future requests
                $_fetchedRange.start = $_activeRange.start;
                $_fetchedRange.end = $_activeRange.end;
            }
        }, debounceHandle, state._queue),
        []
    ).subscribe(_events.set);

    return _events;
}

function now() {
    return (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.readable)(createDate(), set => {
        let interval = setInterval(() => {
            set(createDate());
        }, 1000);

        return () => clearInterval(interval);
    });
}

function today(state) {
    return (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.derived)(state._now, $_now => setMidnight(cloneDate($_now)));
}

class State {
    constructor(plugins, input) {
        plugins = plugins || [];

        // Create options
        let options = createOptions(plugins);
        let parsers = createParsers(plugins);

        // Parse options
        options = parseOpts(options, parsers);
        input = parseOpts(input, parsers);

        // Create stores for options
        for (let [option, value] of Object.entries(options)) {
            this[option] = (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.writable)(value);
        }

        // Private stores
        this._queue = (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.writable)(new Map());  // debounce queue (beforeUpdate)
        this._queue2 = (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.writable)(new Map());  // debounce queue (afterUpdate)
        this._tasks = new Map();  // timeout IDs for tasks
        this._auxiliary = (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.writable)([]);  // auxiliary components
        this._dayGrid = dayGrid(this);
        this._currentRange = currentRange(this);
        this._activeRange = activeRange(this);
        this._fetchedRange = (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.writable)({start: undefined, end: undefined});
        this._events = events(this);
        this._now = now();
        this._today = today(this);
        this._intlEventTime = intlRange(this.locale, this.eventTimeFormat);
        this._intlSlotLabel = intl(this.locale, this.slotLabelFormat);
        this._intlDayHeader = intl(this.locale, this.dayHeaderFormat);
        this._intlDayHeaderAL = intl(this.locale, this.dayHeaderAriaLabelFormat);
        this._intlTitle = intlRange(this.locale, this.titleFormat);
        this._bodyEl = (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.writable)(undefined);
        this._scrollable = (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.writable)(false);
        this._viewTitle = viewTitle(this);
        this._viewDates = viewDates(this);
        this._view = view(this);
        this._viewComponent = (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.writable)(undefined);
        // Resources
        this._resBgColor = (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.writable)(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop);
        this._resTxtColor = (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.writable)(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop);
        // Interaction
        this._interaction = (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.writable)({});
        this._iEvents = (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.writable)([null, null]);  // interaction events: [drag/resize, pointer]
        this._iClasses = (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.writable)(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.identity);  // interaction event css classes
        this._iClass = (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.writable)(undefined);  // interaction css class for entire calendar

        // Set & Get
        this._set = (key, value) => {
            if (validKey(key, this)) {
                if (parsers[key]) {
                    value = parsers[key](value);
                }
                this[key].set(value);
            }
        };
        this._get = key => validKey(key, this) ? (0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.get)(this[key]) : undefined;

        // Let plugins create their private stores
        for (let plugin of plugins) {
            plugin.createStores?.(this);
        }

        if (input.view) {
            // Set initial view based on input
            this.view.set(input.view);
        }

        // Set options for each view
        let views = new Set([...keys(options.views), ...keys(input.views ?? {})]);
        for (let view of views) {
            let defOpts = mergeOpts(options, options.views[view] ?? {});
            let opts = mergeOpts(defOpts, input, input.views?.[view] ?? {});
            let component = opts.component;
            // Make sure we deal with valid opts from now on
            filterOpts(opts, this);
            // Process options
            for (let key of keys(opts)) {
                let {set, _set = set, ...rest} = this[key];

                this[key] = {
                    // Set value in all views
                    set: ['buttonText', 'theme'].includes(key)
                        ? value => {
                            if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(value)) {
                                let result = value(defOpts[key]);
                                opts[key] = result;
                                set(set === _set ? result : value);
                            } else {
                                opts[key] = value;
                                set(value);
                            }
                        }
                        : value => {
                            opts[key] = value;
                            set(value);
                        },
                    _set,
                    ...rest
                };
            }
            // When view changes...
            this.view.subscribe(newView => {
                if (newView === view) {
                    // switch view component
                    this._viewComponent.set(component);
                    if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(opts.viewDidMount)) {
                        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.tick)().then(() => opts.viewDidMount((0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.get)(this._view)));
                    }
                    // update store values
                    for (let key of keys(opts)) {
                        this[key]._set(opts[key]);
                    }
                }
            });
        }
    }
}

function parseOpts(opts, parsers) {
    let result = {...opts};
    for (let key of keys(parsers)) {
        if (key in result) {
            result[key] = parsers[key](result[key]);
        }
    }
    if (opts.views) {
        result.views = {};
        for (let view of keys(opts.views)) {
            result.views[view] = parseOpts(opts.views[view], parsers);
        }
    }
    return result;
}

function mergeOpts(...args) {
    let result = {};
    for (let opts of args) {
        let override = {};
        for (let key of ['buttonText', 'theme']) {
            if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(opts[key])) {
                override[key] = opts[key](result[key]);
            }
        }
        result = {
            ...result,
            ...opts,
            ...override
        };
    }
    return result;
}

function filterOpts(opts, state) {
    keys(opts)
        .filter(key => !validKey(key, state) || key == 'view')
        .forEach(key => delete opts[key]);
}

function validKey(key, state) {
    return state.hasOwnProperty(key) && key[0] !== '_';
}

/* packages/core/src/Buttons.svelte generated by Svelte v4.2.16 */

function get_each_context$2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[25] = list[i];
	return child_ctx;
}

// (57:27) 
function create_if_block_5(ctx) {
	let button_1;
	let t_value = /*$buttonText*/ ctx[5][/*button*/ ctx[25]] + "";
	let t;
	let button_1_class_value;
	let mounted;
	let dispose;

	function click_handler_1() {
		return /*click_handler_1*/ ctx[22](/*button*/ ctx[25]);
	}

	return {
		c() {
			button_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button_1, "class", button_1_class_value = "" + (/*$theme*/ ctx[3].button + (/*$view*/ ctx[7] === /*button*/ ctx[25]
			? ' ' + /*$theme*/ ctx[3].active
			: '') + " ec-" + /*button*/ ctx[25]));
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button_1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button_1, t);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button_1, "click", click_handler_1);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*$buttonText, buttons*/ 33 && t_value !== (t_value = /*$buttonText*/ ctx[5][/*button*/ ctx[25]] + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, t_value);

			if (dirty & /*$theme, $view, buttons*/ 137 && button_1_class_value !== (button_1_class_value = "" + (/*$theme*/ ctx[3].button + (/*$view*/ ctx[7] === /*button*/ ctx[25]
			? ' ' + /*$theme*/ ctx[3].active
			: '') + " ec-" + /*button*/ ctx[25]))) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button_1, "class", button_1_class_value);
			}
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button_1);
			}

			mounted = false;
			dispose();
		}
	};
}

// (52:37) 
function create_if_block_4(ctx) {
	let button_1;
	let t_value = /*$customButtons*/ ctx[6][/*button*/ ctx[25]].text + "";
	let t;
	let button_1_class_value;
	let mounted;
	let dispose;

	return {
		c() {
			button_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button_1, "class", button_1_class_value = "" + (/*$theme*/ ctx[3].button + " ec-" + /*button*/ ctx[25]));
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button_1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button_1, t);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button_1, "click", function () {
					if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(/*$customButtons*/ ctx[6][/*button*/ ctx[25]].click)) /*$customButtons*/ ctx[6][/*button*/ ctx[25]].click.apply(this, arguments);
				});

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*$customButtons, buttons*/ 65 && t_value !== (t_value = /*$customButtons*/ ctx[6][/*button*/ ctx[25]].text + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, t_value);

			if (dirty & /*$theme, buttons*/ 9 && button_1_class_value !== (button_1_class_value = "" + (/*$theme*/ ctx[3].button + " ec-" + /*button*/ ctx[25]))) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button_1, "class", button_1_class_value);
			}
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button_1);
			}

			mounted = false;
			dispose();
		}
	};
}

// (46:32) 
function create_if_block_3(ctx) {
	let button_1;
	let t_value = /*$buttonText*/ ctx[5][/*button*/ ctx[25]] + "";
	let t;
	let button_1_class_value;
	let mounted;
	let dispose;

	return {
		c() {
			button_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button_1, "class", button_1_class_value = "" + (/*$theme*/ ctx[3].button + " ec-" + /*button*/ ctx[25]));
			button_1.disabled = /*isToday*/ ctx[1];
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button_1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button_1, t);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button_1, "click", /*click_handler*/ ctx[21]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty & /*$buttonText, buttons*/ 33 && t_value !== (t_value = /*$buttonText*/ ctx[5][/*button*/ ctx[25]] + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, t_value);

			if (dirty & /*$theme, buttons*/ 9 && button_1_class_value !== (button_1_class_value = "" + (/*$theme*/ ctx[3].button + " ec-" + /*button*/ ctx[25]))) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button_1, "class", button_1_class_value);
			}

			if (dirty & /*isToday*/ 2) {
				button_1.disabled = /*isToday*/ ctx[1];
			}
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button_1);
			}

			mounted = false;
			dispose();
		}
	};
}

// (39:31) 
function create_if_block_2(ctx) {
	let button_1;
	let i;
	let i_class_value;
	let button_1_class_value;
	let button_1_aria_label_value;
	let button_1_title_value;
	let mounted;
	let dispose;

	return {
		c() {
			button_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			i = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("i");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(i, "class", i_class_value = "" + (/*$theme*/ ctx[3].icon + " ec-" + /*button*/ ctx[25]));
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button_1, "class", button_1_class_value = "" + (/*$theme*/ ctx[3].button + " ec-" + /*button*/ ctx[25]));
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button_1, "aria-label", button_1_aria_label_value = /*$buttonText*/ ctx[5].next);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button_1, "title", button_1_title_value = /*$buttonText*/ ctx[5].next);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button_1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button_1, i);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button_1, "click", /*next*/ ctx[19]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty & /*$theme, buttons*/ 9 && i_class_value !== (i_class_value = "" + (/*$theme*/ ctx[3].icon + " ec-" + /*button*/ ctx[25]))) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(i, "class", i_class_value);
			}

			if (dirty & /*$theme, buttons*/ 9 && button_1_class_value !== (button_1_class_value = "" + (/*$theme*/ ctx[3].button + " ec-" + /*button*/ ctx[25]))) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button_1, "class", button_1_class_value);
			}

			if (dirty & /*$buttonText*/ 32 && button_1_aria_label_value !== (button_1_aria_label_value = /*$buttonText*/ ctx[5].next)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button_1, "aria-label", button_1_aria_label_value);
			}

			if (dirty & /*$buttonText*/ 32 && button_1_title_value !== (button_1_title_value = /*$buttonText*/ ctx[5].next)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button_1, "title", button_1_title_value);
			}
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button_1);
			}

			mounted = false;
			dispose();
		}
	};
}

// (32:31) 
function create_if_block_1(ctx) {
	let button_1;
	let i;
	let i_class_value;
	let button_1_class_value;
	let button_1_aria_label_value;
	let button_1_title_value;
	let mounted;
	let dispose;

	return {
		c() {
			button_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
			i = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("i");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(i, "class", i_class_value = "" + (/*$theme*/ ctx[3].icon + " ec-" + /*button*/ ctx[25]));
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button_1, "class", button_1_class_value = "" + (/*$theme*/ ctx[3].button + " ec-" + /*button*/ ctx[25]));
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button_1, "aria-label", button_1_aria_label_value = /*$buttonText*/ ctx[5].prev);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button_1, "title", button_1_title_value = /*$buttonText*/ ctx[5].prev);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button_1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button_1, i);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button_1, "click", /*prev*/ ctx[18]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty & /*$theme, buttons*/ 9 && i_class_value !== (i_class_value = "" + (/*$theme*/ ctx[3].icon + " ec-" + /*button*/ ctx[25]))) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(i, "class", i_class_value);
			}

			if (dirty & /*$theme, buttons*/ 9 && button_1_class_value !== (button_1_class_value = "" + (/*$theme*/ ctx[3].button + " ec-" + /*button*/ ctx[25]))) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button_1, "class", button_1_class_value);
			}

			if (dirty & /*$buttonText*/ 32 && button_1_aria_label_value !== (button_1_aria_label_value = /*$buttonText*/ ctx[5].prev)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button_1, "aria-label", button_1_aria_label_value);
			}

			if (dirty & /*$buttonText*/ 32 && button_1_title_value !== (button_1_title_value = /*$buttonText*/ ctx[5].prev)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button_1, "title", button_1_title_value);
			}
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button_1);
			}

			mounted = false;
			dispose();
		}
	};
}

// (29:4) {#if button == 'title'}
function create_if_block$1(ctx) {
	let h2;
	let h2_class_value;
	let setContent_action;
	let mounted;
	let dispose;

	return {
		c() {
			h2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("h2");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(h2, "class", h2_class_value = /*$theme*/ ctx[3].title);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, h2, anchor);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.action_destroyer)(setContent_action = setContent.call(null, h2, /*$_viewTitle*/ ctx[4]));
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty & /*$theme*/ 8 && h2_class_value !== (h2_class_value = /*$theme*/ ctx[3].title)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(h2, "class", h2_class_value);
			}

			if (setContent_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)(setContent_action.update) && dirty & /*$_viewTitle*/ 16) setContent_action.update.call(null, /*$_viewTitle*/ ctx[4]);
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(h2);
			}

			mounted = false;
			dispose();
		}
	};
}

// (28:0) {#each buttons as button}
function create_each_block$2(ctx) {
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*button*/ ctx[25] == 'title') return create_if_block$1;
		if (/*button*/ ctx[25] == 'prev') return create_if_block_1;
		if (/*button*/ ctx[25] == 'next') return create_if_block_2;
		if (/*button*/ ctx[25] == 'today') return create_if_block_3;
		if (/*$customButtons*/ ctx[6][/*button*/ ctx[25]]) return create_if_block_4;
		if (/*button*/ ctx[25] != '') return create_if_block_5;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type && current_block_type(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if (if_block) if_block.d(1);
				if_block = current_block_type && current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
			}

			if (if_block) {
				if_block.d(detaching);
			}
		}
	};
}

function create_fragment$3(ctx) {
	let each_1_anchor;
	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*buttons*/ ctx[0]);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
	}

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(target, anchor);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, each_1_anchor, anchor);
		},
		p(ctx, [dirty]) {
			if (dirty & /*$theme, $_viewTitle, buttons, $buttonText, prev, next, isToday, $date, today, $customButtons, $view*/ 917759) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*buttons*/ ctx[0]);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$2(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block$2(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(each_1_anchor);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
		}
	};
}

function instance$3($$self, $$props, $$invalidate) {
	let $duration;
	let $date;
	let $hiddenDays;
	let $_currentRange;
	let $theme;
	let $_viewTitle;
	let $buttonText;
	let $customButtons;
	let $view;
	let { buttons } = $$props;
	let { _currentRange, _viewTitle, buttonText, customButtons, date, duration, hiddenDays, theme, view } = (0,svelte__WEBPACK_IMPORTED_MODULE_1__.getContext)('state');
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, _currentRange, value => $$invalidate(20, $_currentRange = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, _viewTitle, value => $$invalidate(4, $_viewTitle = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, buttonText, value => $$invalidate(5, $buttonText = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, customButtons, value => $$invalidate(6, $customButtons = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, date, value => $$invalidate(2, $date = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, duration, value => $$invalidate(23, $duration = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, hiddenDays, value => $$invalidate(24, $hiddenDays = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, theme, value => $$invalidate(3, $theme = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, view, value => $$invalidate(7, $view = value));
	let today = setMidnight(createDate()), isToday;

	function prev() {
		let d = subtractDuration($date, $duration);

		if ($hiddenDays.length && $hiddenDays.length < 7) {
			while ($hiddenDays.includes(d.getUTCDay())) {
				subtractDay(d);
			}
		}

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(date, $date = d, $date);
	}

	function next() {
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(date, $date = addDuration($date, $duration), $date);
	}

	const click_handler = () => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(date, $date = cloneDate(today), $date);
	const click_handler_1 = button => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(view, $view = button, $view);

	$$self.$$set = $$props => {
		if ('buttons' in $$props) $$invalidate(0, buttons = $$props.buttons);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$_currentRange*/ 1048576) {
			$$invalidate(1, isToday = today >= $_currentRange.start && today < $_currentRange.end || null);
		}
	};

	return [
		buttons,
		isToday,
		$date,
		$theme,
		$_viewTitle,
		$buttonText,
		$customButtons,
		$view,
		_currentRange,
		_viewTitle,
		buttonText,
		customButtons,
		date,
		duration,
		hiddenDays,
		theme,
		view,
		today,
		prev,
		next,
		$_currentRange,
		click_handler,
		click_handler_1
	];
}

class Buttons extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance$3, create_fragment$3, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { buttons: 0 });
	}
}

/* packages/core/src/Toolbar.svelte generated by Svelte v4.2.16 */

function get_each_context$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[5] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[8] = list[i];
	return child_ctx;
}

// (28:16) {:else}
function create_else_block(ctx) {
	let buttons_1;
	let current;
	buttons_1 = new Buttons({ props: { buttons: /*buttons*/ ctx[8] } });

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(buttons_1.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(buttons_1, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const buttons_1_changes = {};
			if (dirty & /*sections*/ 1) buttons_1_changes.buttons = /*buttons*/ ctx[8];
			buttons_1.$set(buttons_1_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(buttons_1.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(buttons_1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(buttons_1, detaching);
		}
	};
}

// (24:16) {#if buttons.length > 1}
function create_if_block(ctx) {
	let div;
	let buttons_1;
	let div_class_value;
	let current;
	buttons_1 = new Buttons({ props: { buttons: /*buttons*/ ctx[8] } });

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(buttons_1.$$.fragment);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", div_class_value = /*$theme*/ ctx[1].buttonGroup);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(buttons_1, div, null);
			current = true;
		},
		p(ctx, dirty) {
			const buttons_1_changes = {};
			if (dirty & /*sections*/ 1) buttons_1_changes.buttons = /*buttons*/ ctx[8];
			buttons_1.$set(buttons_1_changes);

			if (!current || dirty & /*$theme*/ 2 && div_class_value !== (div_class_value = /*$theme*/ ctx[1].buttonGroup)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", div_class_value);
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(buttons_1.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(buttons_1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(buttons_1);
		}
	};
}

// (23:12) {#each sections[key] as buttons}
function create_each_block_1(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*buttons*/ ctx[8].length > 1) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
			}

			if_blocks[current_block_type_index].d(detaching);
		}
	};
}

// (21:4) {#each Object.keys(sections) as key}
function create_each_block$1(ctx) {
	let div;
	let t;
	let current;
	let each_value_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*sections*/ ctx[0][/*key*/ ctx[5]]);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	const out = i => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div, null);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t);
			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*$theme, sections, Object*/ 3) {
				each_value_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*sections*/ ctx[0][/*key*/ ctx[5]]);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i], 1);
						each_blocks[i].m(div, t);
					}
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value_1.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
		}
	};
}

function create_fragment$2(ctx) {
	let nav;
	let nav_class_value;
	let current;
	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(Object.keys(/*sections*/ ctx[0]));
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
	}

	const out = i => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			nav = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("nav");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(nav, "class", nav_class_value = /*$theme*/ ctx[1].toolbar);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, nav, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(nav, null);
				}
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*sections, Object, $theme*/ 3) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(Object.keys(/*sections*/ ctx[0]));
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$1(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block$1(child_ctx);
						each_blocks[i].c();
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i], 1);
						each_blocks[i].m(nav, null);
					}
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}

			if (!current || dirty & /*$theme*/ 2 && nav_class_value !== (nav_class_value = /*$theme*/ ctx[1].toolbar)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(nav, "class", nav_class_value);
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(nav);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
		}
	};
}

function instance$2($$self, $$props, $$invalidate) {
	let $headerToolbar;
	let $theme;
	let { headerToolbar, theme } = (0,svelte__WEBPACK_IMPORTED_MODULE_1__.getContext)('state');
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, headerToolbar, value => $$invalidate(4, $headerToolbar = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, theme, value => $$invalidate(1, $theme = value));
	let sections = { start: [], center: [], end: [] };

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*sections, $headerToolbar*/ 17) {
			{
				for (let key of Object.keys(sections)) {
					$$invalidate(0, sections[key] = $headerToolbar[key].split(' ').map(group => group.split(',')), sections);
				}
			}
		}
	};

	return [sections, $theme, headerToolbar, theme, $headerToolbar];
}

class Toolbar extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance$2, create_fragment$2, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
	}
}

/* packages/core/src/Auxiliary.svelte generated by Svelte v4.2.16 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[11] = list[i];
	return child_ctx;
}

// (25:0) {#each $_auxiliary as component}
function create_each_block(ctx) {
	let switch_instance;
	let switch_instance_anchor;
	let current;
	var switch_value = /*component*/ ctx[11];

	function switch_props(ctx, dirty) {
		return {};
	}

	if (switch_value) {
		switch_instance = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.construct_svelte_component)(switch_value, switch_props());
	}

	return {
		c() {
			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(switch_instance.$$.fragment);
			switch_instance_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(switch_instance, target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, switch_instance_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*$_auxiliary*/ 1 && switch_value !== (switch_value = /*component*/ ctx[11])) {
				if (switch_instance) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();
					const old_component = switch_instance;

					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(old_component.$$.fragment, 1, 0, () => {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(old_component, 1);
					});

					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
				}

				if (switch_value) {
					switch_instance = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.construct_svelte_component)(switch_value, switch_props());
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(switch_instance.$$.fragment);
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(switch_instance.$$.fragment, 1);
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(switch_instance_anchor);
			}

			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(switch_instance, detaching);
		}
	};
}

function create_fragment$1(ctx) {
	let each_1_anchor;
	let current;
	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*$_auxiliary*/ ctx[0]);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(target, anchor);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, each_1_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*$_auxiliary*/ 1) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*$_auxiliary*/ ctx[0]);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(each_1_anchor);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	let $_view;
	let $datesSet;
	let $_activeRange;
	let $_auxiliary;
	let { datesSet, _auxiliary, _activeRange, _queue, _view } = (0,svelte__WEBPACK_IMPORTED_MODULE_1__.getContext)('state');
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, datesSet, value => $$invalidate(7, $datesSet = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, _auxiliary, value => $$invalidate(0, $_auxiliary = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, _activeRange, value => $$invalidate(5, $_activeRange = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, _view, value => $$invalidate(6, $_view = value));
	let debounceHandle = {};

	function runDatesSet(_activeRange) {
		if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.is_function)($datesSet)) {
			debounce(
				() => $datesSet({
					start: toLocalDate(_activeRange.start),
					end: toLocalDate(_activeRange.end),
					startStr: toISOString(_activeRange.start),
					endStr: toISOString(_activeRange.end),
					view: toViewWithLocalDates($_view)
				}),
				debounceHandle,
				_queue
			);
		}
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$_activeRange*/ 32) {
			// Set up datesSet callback
			runDatesSet($_activeRange);
		}
	};

	return [$_auxiliary, datesSet, _auxiliary, _activeRange, _view, $_activeRange];
}

class Auxiliary extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance$1, create_fragment$1, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {});
	}
}

/* packages/core/src/Calendar.svelte generated by Svelte v4.2.16 */

function create_fragment(ctx) {
	let div;
	let toolbar;
	let t0;
	let switch_instance;
	let div_class_value;
	let div_role_value;
	let t1;
	let auxiliary;
	let current;
	let mounted;
	let dispose;
	toolbar = new Toolbar({});
	var switch_value = /*$_viewComponent*/ ctx[5];

	function switch_props(ctx, dirty) {
		return {};
	}

	if (switch_value) {
		switch_instance = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.construct_svelte_component)(switch_value, switch_props());
	}

	auxiliary = new Auxiliary({});

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(toolbar.$$.fragment);
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(switch_instance.$$.fragment);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(auxiliary.$$.fragment);

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", div_class_value = "" + (/*$theme*/ ctx[1].calendar + " " + /*$theme*/ ctx[1].view + (/*$_scrollable*/ ctx[0]
			? ' ' + /*$theme*/ ctx[1].withScroll
			: '') + (/*$_iClass*/ ctx[2]
			? ' ' + /*$theme*/ ctx[1][/*$_iClass*/ ctx[2]]
			: '')));

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "role", div_role_value = listView(/*$view*/ ctx[4]) ? 'list' : 'table');
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div, "height", /*$height*/ ctx[3]);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(toolbar, div, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t0);
			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(switch_instance, div, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(auxiliary, target, anchor);
			current = true;

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(window, "resize", /*recheckScrollable*/ ctx[17]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty[0] & /*$_viewComponent*/ 32 && switch_value !== (switch_value = /*$_viewComponent*/ ctx[5])) {
				if (switch_instance) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();
					const old_component = switch_instance;

					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(old_component.$$.fragment, 1, 0, () => {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(old_component, 1);
					});

					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
				}

				if (switch_value) {
					switch_instance = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.construct_svelte_component)(switch_value, switch_props());
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(switch_instance.$$.fragment);
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(switch_instance.$$.fragment, 1);
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(switch_instance, div, null);
				} else {
					switch_instance = null;
				}
			}

			if (!current || dirty[0] & /*$theme, $_scrollable, $_iClass*/ 7 && div_class_value !== (div_class_value = "" + (/*$theme*/ ctx[1].calendar + " " + /*$theme*/ ctx[1].view + (/*$_scrollable*/ ctx[0]
			? ' ' + /*$theme*/ ctx[1].withScroll
			: '') + (/*$_iClass*/ ctx[2]
			? ' ' + /*$theme*/ ctx[1][/*$_iClass*/ ctx[2]]
			: '')))) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", div_class_value);
			}

			if (!current || dirty[0] & /*$view*/ 16 && div_role_value !== (div_role_value = listView(/*$view*/ ctx[4]) ? 'list' : 'table')) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "role", div_role_value);
			}

			if (dirty[0] & /*$height*/ 8) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div, "height", /*$height*/ ctx[3]);
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(toolbar.$$.fragment, local);
			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(switch_instance.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(auxiliary.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(toolbar.$$.fragment, local);
			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(switch_instance.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(auxiliary.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t1);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(toolbar);
			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(switch_instance);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(auxiliary, detaching);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $_bodyEl;
	let $_scrollable;
	let $_queue2;
	let $_queue;
	let $_interaction;
	let $_events;
	let $theme;
	let $_iClass;
	let $height;
	let $view;
	let $_viewComponent;
	let { plugins = [] } = $$props;
	let { options = {} } = $$props;
	let component = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_current_component)();
	let state = new State(plugins, options);
	(0,svelte__WEBPACK_IMPORTED_MODULE_1__.setContext)('state', state);
	let { _viewComponent, _bodyEl, _interaction, _iClass, _events, _queue, _queue2, _tasks, _scrollable, height, theme, view } = state;
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, _viewComponent, value => $$invalidate(5, $_viewComponent = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, _bodyEl, value => $$invalidate(32, $_bodyEl = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, _interaction, value => $$invalidate(35, $_interaction = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, _iClass, value => $$invalidate(2, $_iClass = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, _events, value => $$invalidate(36, $_events = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, _queue, value => $$invalidate(34, $_queue = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, _queue2, value => $$invalidate(33, $_queue2 = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, _scrollable, value => $$invalidate(0, $_scrollable = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, height, value => $$invalidate(3, $height = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, theme, value => $$invalidate(1, $theme = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.component_subscribe)($$self, view, value => $$invalidate(4, $view = value));

	// Reactively update options that did change
	let prevOptions = { ...options };

	function setOption(name, value) {
		state._set(name, value);
		return this;
	}

	function getOption(name) {
		let value = state._get(name);
		return value instanceof Date ? toLocalDate(value) : value;
	}

	function refetchEvents() {
		state._fetchedRange.set({ start: undefined, end: undefined });
		return this;
	}

	function getEvents() {
		return $_events.map(toEventWithLocalDates);
	}

	function getEventById(id) {
		for (let event of $_events) {
			if (event.id == id) {
				return toEventWithLocalDates(event);
			}
		}

		return null;
	}

	function addEvent(event) {
		$_events.push(createEvents([event])[0]);
		_events.set($_events);
		return this;
	}

	function updateEvent(event) {
		for (let e of $_events) {
			if (e.id == event.id) {
				assign(e, createEvents([event])[0]);
				_events.set($_events);
				break;
			}
		}

		return this;
	}

	function removeEventById(id) {
		let idx = $_events.findIndex(event => event.id == id);

		if (idx >= 0) {
			$_events.splice(idx, 1);
			_events.set($_events);
		}

		return this;
	}

	function getView() {
		return toViewWithLocalDates((0,svelte_store__WEBPACK_IMPORTED_MODULE_2__.get)(state._view));
	}

	function unselect() {
		if ($_interaction.action) {
			$_interaction.action.unselect();
		}

		return this;
	}

	function dateFromPoint(x, y) {
		let dayEl = getElementWithPayload(x, y);
		return dayEl ? getPayload(dayEl)(x, y) : null;
	}

	function destroy() {
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(component, true);
	}

	(0,svelte__WEBPACK_IMPORTED_MODULE_1__.beforeUpdate)(() => {
		flushDebounce($_queue);
	});

	(0,svelte__WEBPACK_IMPORTED_MODULE_1__.afterUpdate)(() => {
		flushDebounce($_queue2);
		task(recheckScrollable, null, _tasks);
	});

	function recheckScrollable() {
		if ($_bodyEl) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_store_value)(_scrollable, $_scrollable = hasYScroll($_bodyEl), $_scrollable);
		}
	}

	$$self.$$set = $$props => {
		if ('plugins' in $$props) $$invalidate(18, plugins = $$props.plugins);
		if ('options' in $$props) $$invalidate(19, options = $$props.options);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*options*/ 524288) {
			for (let [name, value] of diff(options, prevOptions)) {
				setOption(name, value);
			}
		}
	};

	return [
		$_scrollable,
		$theme,
		$_iClass,
		$height,
		$view,
		$_viewComponent,
		_viewComponent,
		_bodyEl,
		_interaction,
		_iClass,
		_events,
		_queue,
		_queue2,
		_scrollable,
		height,
		theme,
		view,
		recheckScrollable,
		plugins,
		options,
		setOption,
		getOption,
		refetchEvents,
		getEvents,
		getEventById,
		addEvent,
		updateEvent,
		removeEventById,
		getView,
		unselect,
		dateFromPoint,
		destroy
	];
}

class Calendar extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(
			this,
			options,
			instance,
			create_fragment,
			svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal,
			{
				plugins: 18,
				options: 19,
				setOption: 20,
				getOption: 21,
				refetchEvents: 22,
				getEvents: 23,
				getEventById: 24,
				addEvent: 25,
				updateEvent: 26,
				removeEventById: 27,
				getView: 28,
				unselect: 29,
				dateFromPoint: 30,
				destroy: 31
			},
			null,
			[-1, -1]
		);
	}

	get setOption() {
		return this.$$.ctx[20];
	}

	get getOption() {
		return this.$$.ctx[21];
	}

	get refetchEvents() {
		return this.$$.ctx[22];
	}

	get getEvents() {
		return this.$$.ctx[23];
	}

	get getEventById() {
		return this.$$.ctx[24];
	}

	get addEvent() {
		return this.$$.ctx[25];
	}

	get updateEvent() {
		return this.$$.ctx[26];
	}

	get removeEventById() {
		return this.$$.ctx[27];
	}

	get getView() {
		return this.$$.ctx[28];
	}

	get unselect() {
		return this.$$.ctx[29];
	}

	get dateFromPoint() {
		return this.$$.ctx[30];
	}

	get destroy() {
		return this.$$.ctx[31];
	}
}




/***/ }),

/***/ "./node_modules/@event-calendar/time-grid/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@event-calendar/time-grid/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Body: () => (/* binding */ Body),
/* harmony export */   Day: () => (/* binding */ Day$1),
/* harmony export */   Section: () => (/* binding */ Section),
/* harmony export */   Week: () => (/* binding */ Week),
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _event_calendar_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @event-calendar/core */ "./node_modules/@event-calendar/core/index.js");
/* harmony import */ var svelte_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/store */ "./node_modules/svelte/src/runtime/store/index.js");
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/src/runtime/index.js");





function times(state) {
    return (0,svelte_store__WEBPACK_IMPORTED_MODULE_1__.derived)(
        [state.slotDuration, state._slotTimeLimits, state._intlSlotLabel],
        args => (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.createTimes)((0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.setMidnight)((0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.createDate)()), ...args)
    );
}

function slotTimeLimits(state) {
    return (0,svelte_store__WEBPACK_IMPORTED_MODULE_1__.derived)(
        [state.slotMinTime, state.slotMaxTime, state.flexibleSlotTimeLimits, state._viewDates, state._events],
        args => (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.createSlotTimeLimits)(...args)
    );
}

function groupEventChunks(chunks) {
    if (!chunks.length) {
        return;
    }

    (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.sortEventChunks)(chunks);

    // Group
    let group = {
        columns: [],
        end: chunks[0].end
    };
    for (let chunk of chunks) {
        let c = 0;
        if (chunk.start < group.end) {
            for (; c < group.columns.length; ++c) {
                if (group.columns[c][group.columns[c].length - 1].end <= chunk.start) {
                    break;
                }
            }
            if (chunk.end > group.end) {
                group.end = chunk.end;
            }
        } else {
            group = {
                columns: [],
                end: chunk.end
            };
        }

        if (group.columns.length < c + 1) {
            group.columns.push([]);
        }
        group.columns[c].push(chunk);

        chunk.group = group;
        chunk.column = c;
    }
}

function createAllDayContent(allDayContent) {
    let text = 'all-day';
    let content;
    if (allDayContent) {
        content = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)(allDayContent) ? allDayContent({text}) : allDayContent;
        if (typeof content === 'string') {
            content = {html: content};
        }
    } else {
        content = {
            html: text
        };
    }

    return content;
}

/* packages/time-grid/src/Section.svelte generated by Svelte v4.2.16 */
const get_lines_slot_changes = dirty => ({});
const get_lines_slot_context = ctx => ({});

function get_each_context$5(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

// (14:4) {#each $_times as time}
function create_each_block$5(ctx) {
	let time_1;
	let time_1_class_value;
	let time_1_datetime_value;
	let setContent_action;
	let mounted;
	let dispose;

	return {
		c() {
			time_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("time");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(time_1, "class", time_1_class_value = /*$theme*/ ctx[1].time);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(time_1, "datetime", time_1_datetime_value = /*time*/ ctx[9][0]);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.insert)(target, time_1, anchor);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.action_destroyer)(setContent_action = _event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.setContent.call(null, time_1, /*time*/ ctx[9][2] ? /*time*/ ctx[9][1] : ''));
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty & /*$theme*/ 2 && time_1_class_value !== (time_1_class_value = /*$theme*/ ctx[1].time)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(time_1, "class", time_1_class_value);
			}

			if (dirty & /*$_times*/ 4 && time_1_datetime_value !== (time_1_datetime_value = /*time*/ ctx[9][0])) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(time_1, "datetime", time_1_datetime_value);
			}

			if (setContent_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)(setContent_action.update) && dirty & /*$_times*/ 4) setContent_action.update.call(null, /*time*/ ctx[9][2] ? /*time*/ ctx[9][1] : '');
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.detach)(time_1);
			}

			mounted = false;
			dispose();
		}
	};
}

function create_fragment$8(ctx) {
	let div1;
	let div0;
	let div0_class_value;
	let setContent_action;
	let t0;
	let div1_class_value;
	let t1;
	let div3;
	let div2;
	let div2_class_value;
	let t2;
	let div3_class_value;
	let current;
	let mounted;
	let dispose;
	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.ensure_array_like)(/*$_times*/ ctx[2]);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$5(get_each_context$5(ctx, each_value, i));
	}

	const lines_slot_template = /*#slots*/ ctx[8].lines;
	const lines_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.create_slot)(lines_slot_template, ctx, /*$$scope*/ ctx[7], get_lines_slot_context);
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

	return {
		c() {
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("div");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.space)();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.space)();
			div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("div");
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("div");
			if (lines_slot) lines_slot.c();
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.space)();
			if (default_slot) default_slot.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div0, "class", div0_class_value = /*$theme*/ ctx[1].sidebarTitle);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div1, "class", div1_class_value = /*$theme*/ ctx[1].sidebar);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div2, "class", div2_class_value = /*$theme*/ ctx[1].lines);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div3, "class", div3_class_value = /*$theme*/ ctx[1].days);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div3, "role", "row");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.insert)(target, div1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.append)(div1, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.append)(div1, t0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div1, null);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.insert)(target, t1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.insert)(target, div3, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.append)(div3, div2);

			if (lines_slot) {
				lines_slot.m(div2, null);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.append)(div3, t2);

			if (default_slot) {
				default_slot.m(div3, null);
			}

			current = true;

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.action_destroyer)(setContent_action = _event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.setContent.call(null, div0, /*allDayText*/ ctx[0]));
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (!current || dirty & /*$theme*/ 2 && div0_class_value !== (div0_class_value = /*$theme*/ ctx[1].sidebarTitle)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div0, "class", div0_class_value);
			}

			if (setContent_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)(setContent_action.update) && dirty & /*allDayText*/ 1) setContent_action.update.call(null, /*allDayText*/ ctx[0]);

			if (dirty & /*$theme, $_times*/ 6) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.ensure_array_like)(/*$_times*/ ctx[2]);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$5(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block$5(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div1, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (!current || dirty & /*$theme*/ 2 && div1_class_value !== (div1_class_value = /*$theme*/ ctx[1].sidebar)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div1, "class", div1_class_value);
			}

			if (lines_slot) {
				if (lines_slot.p && (!current || dirty & /*$$scope*/ 128)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.update_slot_base)(
						lines_slot,
						lines_slot_template,
						ctx,
						/*$$scope*/ ctx[7],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.get_all_dirty_from_scope)(/*$$scope*/ ctx[7])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.get_slot_changes)(lines_slot_template, /*$$scope*/ ctx[7], dirty, get_lines_slot_changes),
						get_lines_slot_context
					);
				}
			}

			if (!current || dirty & /*$theme*/ 2 && div2_class_value !== (div2_class_value = /*$theme*/ ctx[1].lines)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div2, "class", div2_class_value);
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 128)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.update_slot_base)(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[7],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.get_all_dirty_from_scope)(/*$$scope*/ ctx[7])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.get_slot_changes)(default_slot_template, /*$$scope*/ ctx[7], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*$theme*/ 2 && div3_class_value !== (div3_class_value = /*$theme*/ ctx[1].days)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div3, "class", div3_class_value);
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(lines_slot, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(default_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(lines_slot, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.detach)(div1);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.detach)(t1);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.detach)(div3);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.destroy_each)(each_blocks, detaching);
			if (lines_slot) lines_slot.d(detaching);
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			dispose();
		}
	};
}

function instance$8($$self, $$props, $$invalidate) {
	let $allDayContent;
	let $theme;
	let $_times;
	let { $$slots: slots = {}, $$scope } = $$props;
	let { allDayContent, theme, _times } = (0,svelte__WEBPACK_IMPORTED_MODULE_3__.getContext)('state');
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, allDayContent, value => $$invalidate(6, $allDayContent = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, theme, value => $$invalidate(1, $theme = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _times, value => $$invalidate(2, $_times = value));
	let allDayText;

	$$self.$$set = $$props => {
		if ('$$scope' in $$props) $$invalidate(7, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$allDayContent*/ 64) {
			$$invalidate(0, allDayText = createAllDayContent($allDayContent));
		}
	};

	return [
		allDayText,
		$theme,
		$_times,
		allDayContent,
		theme,
		_times,
		$allDayContent,
		$$scope,
		slots
	];
}

class Section extends svelte_internal__WEBPACK_IMPORTED_MODULE_2__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.init)(this, options, instance$8, create_fragment$8, svelte_internal__WEBPACK_IMPORTED_MODULE_2__.safe_not_equal, {});
	}
}

/* packages/time-grid/src/Body.svelte generated by Svelte v4.2.16 */

function get_each_context$4(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[23] = list[i];
	return child_ctx;
}

// (34:8) <Section>
function create_default_slot$1(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[16].default;
	const default_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.create_slot)(default_slot_template, ctx, /*$$scope*/ ctx[18], null);

	return {
		c() {
			if (default_slot) default_slot.c();
		},
		m(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 262144)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.update_slot_base)(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[18],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.get_all_dirty_from_scope)(/*$$scope*/ ctx[18])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.get_slot_changes)(default_slot_template, /*$$scope*/ ctx[18], dirty, null),
						null
					);
				}
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(default_slot, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (default_slot) default_slot.d(detaching);
		}
	};
}

// (36:16) {#each lines as line}
function create_each_block$4(ctx) {
	let div;
	let div_class_value;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div, "class", div_class_value = /*$theme*/ ctx[3].line);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.insert)(target, div, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*$theme*/ 8 && div_class_value !== (div_class_value = /*$theme*/ ctx[3].line)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div, "class", div_class_value);
			}
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.detach)(div);
			}
		}
	};
}

// (35:12) <svelte:fragment slot="lines">
function create_lines_slot(ctx) {
	let each_1_anchor;
	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.ensure_array_like)(/*lines*/ ctx[2]);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$4(get_each_context$4(ctx, each_value, i));
	}

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.empty)();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(target, anchor);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.insert)(target, each_1_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*$theme, lines*/ 12) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.ensure_array_like)(/*lines*/ ctx[2]);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$4(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block$4(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.detach)(each_1_anchor);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.destroy_each)(each_blocks, detaching);
		}
	};
}

function create_fragment$7(ctx) {
	let div1;
	let div0;
	let section;
	let div0_class_value;
	let div1_class_value;
	let current;

	section = new Section({
			props: {
				$$slots: {
					lines: [create_lines_slot],
					default: [create_default_slot$1]
				},
				$$scope: { ctx }
			}
		});

	return {
		c() {
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.create_component)(section.$$.fragment);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div0, "class", div0_class_value = /*$theme*/ ctx[3].content);

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div1, "class", div1_class_value = "" + (/*$theme*/ ctx[3].body + (/*compact*/ ctx[1]
			? ' ' + /*$theme*/ ctx[3].compact
			: '')));
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.insert)(target, div1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.append)(div1, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.mount_component)(section, div0, null);
			/*div1_binding*/ ctx[17](div1);
			current = true;
		},
		p(ctx, [dirty]) {
			const section_changes = {};

			if (dirty & /*$$scope, lines, $theme*/ 262156) {
				section_changes.$$scope = { dirty, ctx };
			}

			section.$set(section_changes);

			if (!current || dirty & /*$theme*/ 8 && div0_class_value !== (div0_class_value = /*$theme*/ ctx[3].content)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div0, "class", div0_class_value);
			}

			if (!current || dirty & /*$theme, compact*/ 10 && div1_class_value !== (div1_class_value = "" + (/*$theme*/ ctx[3].body + (/*compact*/ ctx[1]
			? ' ' + /*$theme*/ ctx[3].compact
			: '')))) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div1, "class", div1_class_value);
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(section.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(section.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.detach)(div1);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.destroy_component)(section);
			/*div1_binding*/ ctx[17](null);
		}
	};
}

function instance$7($$self, $$props, $$invalidate) {
	let $slotHeight;
	let $slotDuration;
	let $_slotTimeLimits;
	let $scrollTime;
	let $_viewDates;
	let $_times;
	let $_bodyEl;
	let $theme;
	let { $$slots: slots = {}, $$scope } = $$props;
	let { _bodyEl, _viewDates, _slotTimeLimits, _times, scrollTime, slotDuration, slotHeight, theme } = (0,svelte__WEBPACK_IMPORTED_MODULE_3__.getContext)('state');
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _bodyEl, value => $$invalidate(21, $_bodyEl = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _viewDates, value => $$invalidate(14, $_viewDates = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _slotTimeLimits, value => $$invalidate(20, $_slotTimeLimits = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _times, value => $$invalidate(15, $_times = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, scrollTime, value => $$invalidate(13, $scrollTime = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, slotDuration, value => $$invalidate(12, $slotDuration = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, slotHeight, value => $$invalidate(19, $slotHeight = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, theme, value => $$invalidate(3, $theme = value));
	let el;
	let compact;
	let lines = [];

	function scrollToTime() {
		$$invalidate(0, el.scrollTop = (($scrollTime.seconds - $_slotTimeLimits.min.seconds) / $slotDuration.seconds - 0.5) * $slotHeight, el);
	}

	function div1_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_2__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(0, el);
		});
	}

	$$self.$$set = $$props => {
		if ('$$scope' in $$props) $$invalidate(18, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*el*/ 1) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.set_store_value)(_bodyEl, $_bodyEl = el, $_bodyEl);
		}

		if ($$self.$$.dirty & /*$slotDuration, $_times*/ 36864) {
			{
				$$invalidate(1, compact = $slotDuration.seconds >= 3600);
				$$invalidate(2, lines.length = $_times.length, lines);
			}
		}

		if ($$self.$$.dirty & /*el, $_viewDates, $scrollTime*/ 24577) {
			if (el) {
				scrollToTime();
			}
		}
	};

	return [
		el,
		compact,
		lines,
		$theme,
		_bodyEl,
		_viewDates,
		_slotTimeLimits,
		_times,
		scrollTime,
		slotDuration,
		slotHeight,
		theme,
		$slotDuration,
		$scrollTime,
		$_viewDates,
		$_times,
		slots,
		div1_binding,
		$$scope
	];
}

class Body extends svelte_internal__WEBPACK_IMPORTED_MODULE_2__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.init)(this, options, instance$7, create_fragment$7, svelte_internal__WEBPACK_IMPORTED_MODULE_2__.safe_not_equal, {});
	}
}

/* packages/time-grid/src/Event.svelte generated by Svelte v4.2.16 */

function create_fragment$6(ctx) {
	let article;
	let div;
	let div_class_value;
	let setContent_action;
	let t;
	let switch_instance;
	let article_role_value;
	let article_tabindex_value;
	let current;
	let mounted;
	let dispose;
	var switch_value = /*$_interaction*/ ctx[10].resizer;

	function switch_props(ctx, dirty) {
		return { props: { event: /*event*/ ctx[0] } };
	}

	if (switch_value) {
		switch_instance = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.construct_svelte_component)(switch_value, switch_props(ctx));

		switch_instance.$on("pointerdown", function () {
			if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)(/*createDragHandler*/ ctx[34](/*$_interaction*/ ctx[10], 'y'))) /*createDragHandler*/ ctx[34](/*$_interaction*/ ctx[10], 'y').apply(this, arguments);
		});
	}

	return {
		c() {
			article = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("article");
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("div");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.space)();
			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.create_component)(switch_instance.$$.fragment);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div, "class", div_class_value = /*$theme*/ ctx[2].eventBody);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(article, "class", /*classes*/ ctx[4]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(article, "style", /*style*/ ctx[5]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(article, "role", article_role_value = /*onclick*/ ctx[7] ? 'button' : undefined);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(article, "tabindex", article_tabindex_value = /*onclick*/ ctx[7] ? 0 : undefined);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.insert)(target, article, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.append)(article, div);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.append)(article, t);
			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.mount_component)(switch_instance, article, null);
			/*article_binding*/ ctx[53](article);
			current = true;

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.action_destroyer)(setContent_action = _event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.setContent.call(null, div, /*content*/ ctx[6])),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.listen)(article, "click", function () {
						if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)(/*onclick*/ ctx[7])) /*onclick*/ ctx[7].apply(this, arguments);
					}),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.listen)(article, "keydown", function () {
						if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)(/*onclick*/ ctx[7] && (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.keyEnter)(/*onclick*/ ctx[7]))) (/*onclick*/ ctx[7] && (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.keyEnter)(/*onclick*/ ctx[7])).apply(this, arguments);
					}),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.listen)(article, "mouseenter", function () {
						if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)(/*createHandler*/ ctx[33](/*$eventMouseEnter*/ ctx[8], /*display*/ ctx[1]))) /*createHandler*/ ctx[33](/*$eventMouseEnter*/ ctx[8], /*display*/ ctx[1]).apply(this, arguments);
					}),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.listen)(article, "mouseleave", function () {
						if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)(/*createHandler*/ ctx[33](/*$eventMouseLeave*/ ctx[9], /*display*/ ctx[1]))) /*createHandler*/ ctx[33](/*$eventMouseLeave*/ ctx[9], /*display*/ ctx[1]).apply(this, arguments);
					}),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.listen)(article, "pointerdown", function () {
						if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)(!(0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.bgEvent)(/*display*/ ctx[1]) && !(0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.helperEvent)(/*display*/ ctx[1]) && /*createDragHandler*/ ctx[34](/*$_interaction*/ ctx[10]))) (!(0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.bgEvent)(/*display*/ ctx[1]) && !(0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.helperEvent)(/*display*/ ctx[1]) && /*createDragHandler*/ ctx[34](/*$_interaction*/ ctx[10])).apply(this, arguments);
					})
				];

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (!current || dirty[0] & /*$theme*/ 4 && div_class_value !== (div_class_value = /*$theme*/ ctx[2].eventBody)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div, "class", div_class_value);
			}

			if (setContent_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)(setContent_action.update) && dirty[0] & /*content*/ 64) setContent_action.update.call(null, /*content*/ ctx[6]);

			if (dirty[0] & /*$_interaction*/ 1024 && switch_value !== (switch_value = /*$_interaction*/ ctx[10].resizer)) {
				if (switch_instance) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.group_outros)();
					const old_component = switch_instance;

					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(old_component.$$.fragment, 1, 0, () => {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.destroy_component)(old_component, 1);
					});

					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.check_outros)();
				}

				if (switch_value) {
					switch_instance = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.construct_svelte_component)(switch_value, switch_props(ctx));

					switch_instance.$on("pointerdown", function () {
						if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)(/*createDragHandler*/ ctx[34](/*$_interaction*/ ctx[10], 'y'))) /*createDragHandler*/ ctx[34](/*$_interaction*/ ctx[10], 'y').apply(this, arguments);
					});

					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.create_component)(switch_instance.$$.fragment);
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(switch_instance.$$.fragment, 1);
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.mount_component)(switch_instance, article, null);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				const switch_instance_changes = {};
				if (dirty[0] & /*event*/ 1) switch_instance_changes.event = /*event*/ ctx[0];
				switch_instance.$set(switch_instance_changes);
			}

			if (!current || dirty[0] & /*classes*/ 16) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(article, "class", /*classes*/ ctx[4]);
			}

			if (!current || dirty[0] & /*style*/ 32) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(article, "style", /*style*/ ctx[5]);
			}

			if (!current || dirty[0] & /*onclick*/ 128 && article_role_value !== (article_role_value = /*onclick*/ ctx[7] ? 'button' : undefined)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(article, "role", article_role_value);
			}

			if (!current || dirty[0] & /*onclick*/ 128 && article_tabindex_value !== (article_tabindex_value = /*onclick*/ ctx[7] ? 0 : undefined)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(article, "tabindex", article_tabindex_value);
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.detach)(article);
			}

			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.destroy_component)(switch_instance);
			/*article_binding*/ ctx[53](null);
			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.run_all)(dispose);
		}
	};
}

function instance$6($$self, $$props, $$invalidate) {
	let $eventClick;
	let $_view;
	let $eventAllUpdated;
	let $eventDidMount;
	let $_intlEventTime;
	let $theme;
	let $eventContent;
	let $displayEventEnd;
	let $eventClassNames;
	let $_iClasses;
	let $slotEventOverlap;
	let $eventTextColor;
	let $_resTxtColor;
	let $eventColor;
	let $eventBackgroundColor;
	let $_resBgColor;
	let $slotHeight;
	let $_slotTimeLimits;
	let $slotDuration;
	let $eventMouseEnter;
	let $eventMouseLeave;
	let $_interaction;
	let { date } = $$props;
	let { chunk } = $$props;
	let { displayEventEnd, eventAllUpdated, eventBackgroundColor, eventTextColor, eventColor, eventContent, eventClick, eventDidMount, eventClassNames, eventMouseEnter, eventMouseLeave, slotEventOverlap, slotDuration, slotHeight, theme, _view, _intlEventTime, _interaction, _iClasses, _resBgColor, _resTxtColor, _slotTimeLimits, _tasks } = (0,svelte__WEBPACK_IMPORTED_MODULE_3__.getContext)('state');
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, displayEventEnd, value => $$invalidate(41, $displayEventEnd = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, eventAllUpdated, value => $$invalidate(55, $eventAllUpdated = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, eventBackgroundColor, value => $$invalidate(48, $eventBackgroundColor = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, eventTextColor, value => $$invalidate(45, $eventTextColor = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, eventColor, value => $$invalidate(47, $eventColor = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, eventContent, value => $$invalidate(40, $eventContent = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, eventClick, value => $$invalidate(37, $eventClick = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, eventDidMount, value => $$invalidate(56, $eventDidMount = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, eventClassNames, value => $$invalidate(42, $eventClassNames = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, eventMouseEnter, value => $$invalidate(8, $eventMouseEnter = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, eventMouseLeave, value => $$invalidate(9, $eventMouseLeave = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, slotEventOverlap, value => $$invalidate(44, $slotEventOverlap = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, slotDuration, value => $$invalidate(52, $slotDuration = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, slotHeight, value => $$invalidate(50, $slotHeight = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, theme, value => $$invalidate(2, $theme = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _view, value => $$invalidate(38, $_view = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _intlEventTime, value => $$invalidate(39, $_intlEventTime = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _interaction, value => $$invalidate(10, $_interaction = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _iClasses, value => $$invalidate(43, $_iClasses = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _resBgColor, value => $$invalidate(49, $_resBgColor = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _resTxtColor, value => $$invalidate(46, $_resTxtColor = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _slotTimeLimits, value => $$invalidate(51, $_slotTimeLimits = value));
	let el;
	let event;
	let display;
	let classes;
	let style;
	let content;
	let timeText;
	let onclick;

	(0,svelte__WEBPACK_IMPORTED_MODULE_3__.onMount)(() => {
		if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)($eventDidMount)) {
			$eventDidMount({
				event: (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.toEventWithLocalDates)(event),
				timeText,
				el,
				view: (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.toViewWithLocalDates)($_view)
			});
		}
	});

	(0,svelte__WEBPACK_IMPORTED_MODULE_3__.afterUpdate)(() => {
		if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)($eventAllUpdated) && !(0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.helperEvent)(display)) {
			(0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.task)(() => $eventAllUpdated({ view: (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.toViewWithLocalDates)($_view) }), 'eau', _tasks);
		}
	});

	function createHandler(fn, display) {
		return !(0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.helperEvent)(display) && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)(fn)
		? jsEvent => fn({
				event: (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.toEventWithLocalDates)(event),
				el,
				jsEvent,
				view: (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.toViewWithLocalDates)($_view)
			})
		: undefined;
	}

	function createDragHandler(interaction, resize) {
		return interaction.action
		? jsEvent => interaction.action.drag(event, jsEvent, resize)
		: undefined;
	}

	function article_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_2__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(3, el);
		});
	}

	$$self.$$set = $$props => {
		if ('date' in $$props) $$invalidate(35, date = $$props.date);
		if ('chunk' in $$props) $$invalidate(36, chunk = $$props.chunk);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[1] & /*chunk*/ 32) {
			$$invalidate(0, event = chunk.event);
		}

		if ($$self.$$.dirty[0] & /*event, style, display, $theme*/ 39 | $$self.$$.dirty[1] & /*$slotDuration, $_slotTimeLimits, chunk, date, $slotHeight, $_resBgColor, $eventBackgroundColor, $eventColor, $_resTxtColor, $eventTextColor, $slotEventOverlap, $_iClasses, $eventClassNames, $_view*/ 4192432) {
			{
				$$invalidate(1, display = event.display);

				// Style
				let step = $slotDuration.seconds;

				let offset = $_slotTimeLimits.min.seconds;
				let start = (chunk.start - date) / 1000;
				let end = (chunk.end - date) / 1000;
				let top = (start - offset) / step * $slotHeight;
				let height = (end - start) / step * $slotHeight;
				let maxHeight = ($_slotTimeLimits.max.seconds - start) / step * $slotHeight;
				let bgColor = event.backgroundColor || $_resBgColor(event) || $eventBackgroundColor || $eventColor;
				let txtColor = event.textColor || $_resTxtColor(event) || $eventTextColor;
				$$invalidate(5, style = `top:${top}px;` + `min-height:${height}px;` + `height:${height}px;` + `max-height:${maxHeight}px;`);

				if (bgColor) {
					$$invalidate(5, style += `background-color:${bgColor};`);
				}

				if (txtColor) {
					$$invalidate(5, style += `color:${txtColor};`);
				}

				if (!(0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.bgEvent)(display) && !(0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.helperEvent)(display) || (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.ghostEvent)(display)) {
					$$invalidate(5, style += `z-index:${chunk.column + 1};` + `left:${100 / chunk.group.columns.length * chunk.column}%;` + `width:${100 / chunk.group.columns.length * ($slotEventOverlap
					? 0.5 * (1 + chunk.group.columns.length - chunk.column)
					: 1)}%;`);
				}

				// Class
				$$invalidate(4, classes = [
					(0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.bgEvent)(display) ? $theme.bgEvent : $theme.event,
					...$_iClasses([], event),
					...(0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.createEventClasses)($eventClassNames, event, $_view)
				].join(' '));
			}
		}

		if ($$self.$$.dirty[0] & /*$theme*/ 4 | $$self.$$.dirty[1] & /*chunk, $displayEventEnd, $eventContent, $_intlEventTime, $_view*/ 1952) {
			// Content
			$$invalidate(6, [timeText, content] = (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.createEventContent)(chunk, $displayEventEnd, $eventContent, $theme, $_intlEventTime, $_view), content);
		}

		if ($$self.$$.dirty[0] & /*display*/ 2 | $$self.$$.dirty[1] & /*$eventClick*/ 64) {
			// Onclick handler
			$$invalidate(7, onclick = !(0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.bgEvent)(display) && createHandler($eventClick, display));
		}
	};

	return [
		event,
		display,
		$theme,
		el,
		classes,
		style,
		content,
		onclick,
		$eventMouseEnter,
		$eventMouseLeave,
		$_interaction,
		displayEventEnd,
		eventAllUpdated,
		eventBackgroundColor,
		eventTextColor,
		eventColor,
		eventContent,
		eventClick,
		eventDidMount,
		eventClassNames,
		eventMouseEnter,
		eventMouseLeave,
		slotEventOverlap,
		slotDuration,
		slotHeight,
		theme,
		_view,
		_intlEventTime,
		_interaction,
		_iClasses,
		_resBgColor,
		_resTxtColor,
		_slotTimeLimits,
		createHandler,
		createDragHandler,
		date,
		chunk,
		$eventClick,
		$_view,
		$_intlEventTime,
		$eventContent,
		$displayEventEnd,
		$eventClassNames,
		$_iClasses,
		$slotEventOverlap,
		$eventTextColor,
		$_resTxtColor,
		$eventColor,
		$eventBackgroundColor,
		$_resBgColor,
		$slotHeight,
		$_slotTimeLimits,
		$slotDuration,
		article_binding
	];
}

let Event$1 = class Event extends svelte_internal__WEBPACK_IMPORTED_MODULE_2__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.init)(this, options, instance$6, create_fragment$6, svelte_internal__WEBPACK_IMPORTED_MODULE_2__.safe_not_equal, { date: 35, chunk: 36 }, null, [-1, -1]);
	}
};

/* packages/time-grid/src/NowIndicator.svelte generated by Svelte v4.2.16 */

function create_fragment$5(ctx) {
	let div;
	let div_class_value;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div, "class", div_class_value = /*$theme*/ ctx[1].nowIndicator);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.set_style)(div, "top", /*top*/ ctx[0] + "px");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.insert)(target, div, anchor);
		},
		p(ctx, [dirty]) {
			if (dirty & /*$theme*/ 2 && div_class_value !== (div_class_value = /*$theme*/ ctx[1].nowIndicator)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div, "class", div_class_value);
			}

			if (dirty & /*top*/ 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.set_style)(div, "top", /*top*/ ctx[0] + "px");
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_2__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_2__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.detach)(div);
			}
		}
	};
}

function instance$5($$self, $$props, $$invalidate) {
	let $slotHeight;
	let $_slotTimeLimits;
	let $slotDuration;
	let $_today;
	let $_now;
	let $theme;
	let { slotDuration, slotHeight, theme, _now, _today, _slotTimeLimits } = (0,svelte__WEBPACK_IMPORTED_MODULE_3__.getContext)('state');
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, slotDuration, value => $$invalidate(11, $slotDuration = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, slotHeight, value => $$invalidate(9, $slotHeight = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, theme, value => $$invalidate(1, $theme = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _now, value => $$invalidate(13, $_now = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _today, value => $$invalidate(12, $_today = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _slotTimeLimits, value => $$invalidate(10, $_slotTimeLimits = value));
	let start;
	let top = 0;

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$_now, $_today*/ 12288) {
			$$invalidate(8, start = ($_now - $_today) / 1000 / 60);
		}

		if ($$self.$$.dirty & /*$slotDuration, $_slotTimeLimits, start, $slotHeight*/ 3840) {
			{
				// Style
				let step = $slotDuration.seconds / 60;

				let offset = $_slotTimeLimits.min.seconds / 60;
				$$invalidate(0, top = (start - offset) / step * $slotHeight);
			}
		}
	};

	return [
		top,
		$theme,
		slotDuration,
		slotHeight,
		theme,
		_now,
		_today,
		_slotTimeLimits,
		start,
		$slotHeight,
		$_slotTimeLimits,
		$slotDuration,
		$_today,
		$_now
	];
}

class NowIndicator extends svelte_internal__WEBPACK_IMPORTED_MODULE_2__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.init)(this, options, instance$5, create_fragment$5, svelte_internal__WEBPACK_IMPORTED_MODULE_2__.safe_not_equal, {});
	}
}

/* packages/time-grid/src/Day.svelte generated by Svelte v4.2.16 */

function get_each_context$3(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[32] = list[i];
	return child_ctx;
}

function get_each_context_1$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[32] = list[i];
	return child_ctx;
}

// (83:8) {#each bgChunks as chunk (chunk.event)}
function create_each_block_1$1(key_1, ctx) {
	let first;
	let event;
	let current;

	event = new Event$1({
			props: {
				date: /*date*/ ctx[0],
				chunk: /*chunk*/ ctx[32]
			}
		});

	return {
		key: key_1,
		first: null,
		c() {
			first = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.empty)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.create_component)(event.$$.fragment);
			this.first = first;
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.insert)(target, first, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.mount_component)(event, target, anchor);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			const event_changes = {};
			if (dirty[0] & /*date*/ 1) event_changes.date = /*date*/ ctx[0];
			if (dirty[0] & /*bgChunks*/ 8) event_changes.chunk = /*chunk*/ ctx[32];
			event.$set(event_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(event.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(event.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.detach)(first);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.destroy_component)(event, detaching);
		}
	};
}

// (89:8) {#if iChunks[1]}
function create_if_block_2(ctx) {
	let event;
	let current;

	event = new Event$1({
			props: {
				date: /*date*/ ctx[0],
				chunk: /*iChunks*/ ctx[4][1]
			}
		});

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.create_component)(event.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.mount_component)(event, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const event_changes = {};
			if (dirty[0] & /*date*/ 1) event_changes.date = /*date*/ ctx[0];
			if (dirty[0] & /*iChunks*/ 16) event_changes.chunk = /*iChunks*/ ctx[4][1];
			event.$set(event_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(event.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(event.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.destroy_component)(event, detaching);
		}
	};
}

// (92:8) {#each chunks as chunk (chunk.event)}
function create_each_block$3(key_1, ctx) {
	let first;
	let event;
	let current;

	event = new Event$1({
			props: {
				date: /*date*/ ctx[0],
				chunk: /*chunk*/ ctx[32]
			}
		});

	return {
		key: key_1,
		first: null,
		c() {
			first = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.empty)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.create_component)(event.$$.fragment);
			this.first = first;
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.insert)(target, first, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.mount_component)(event, target, anchor);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			const event_changes = {};
			if (dirty[0] & /*date*/ 1) event_changes.date = /*date*/ ctx[0];
			if (dirty[0] & /*chunks*/ 4) event_changes.chunk = /*chunk*/ ctx[32];
			event.$set(event_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(event.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(event.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.detach)(first);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.destroy_component)(event, detaching);
		}
	};
}

// (96:8) {#if iChunks[0] && !iChunks[0].event.allDay}
function create_if_block_1(ctx) {
	let event;
	let current;

	event = new Event$1({
			props: {
				date: /*date*/ ctx[0],
				chunk: /*iChunks*/ ctx[4][0]
			}
		});

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.create_component)(event.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.mount_component)(event, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const event_changes = {};
			if (dirty[0] & /*date*/ 1) event_changes.date = /*date*/ ctx[0];
			if (dirty[0] & /*iChunks*/ 16) event_changes.chunk = /*iChunks*/ ctx[4][0];
			event.$set(event_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(event.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(event.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.destroy_component)(event, detaching);
		}
	};
}

// (102:8) {#if $nowIndicator && isToday}
function create_if_block$2(ctx) {
	let nowindicator;
	let current;
	nowindicator = new NowIndicator({});

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.create_component)(nowindicator.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.mount_component)(nowindicator, target, anchor);
			current = true;
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(nowindicator.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(nowindicator.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.destroy_component)(nowindicator, detaching);
		}
	};
}

function create_fragment$4(ctx) {
	let div3;
	let div0;
	let each_blocks_1 = [];
	let each0_lookup = new Map();
	let div0_class_value;
	let t0;
	let div1;
	let t1;
	let each_blocks = [];
	let each1_lookup = new Map();
	let t2;
	let div1_class_value;
	let t3;
	let div2;
	let div2_class_value;
	let div3_class_value;
	let current;
	let mounted;
	let dispose;
	let each_value_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.ensure_array_like)(/*bgChunks*/ ctx[3]);
	const get_key = ctx => /*chunk*/ ctx[32].event;

	for (let i = 0; i < each_value_1.length; i += 1) {
		let child_ctx = get_each_context_1$1(ctx, each_value_1, i);
		let key = get_key(child_ctx);
		each0_lookup.set(key, each_blocks_1[i] = create_each_block_1$1(key, child_ctx));
	}

	let if_block0 = /*iChunks*/ ctx[4][1] && create_if_block_2(ctx);
	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.ensure_array_like)(/*chunks*/ ctx[2]);
	const get_key_1 = ctx => /*chunk*/ ctx[32].event;

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context$3(ctx, each_value, i);
		let key = get_key_1(child_ctx);
		each1_lookup.set(key, each_blocks[i] = create_each_block$3(key, child_ctx));
	}

	let if_block1 = /*iChunks*/ ctx[4][0] && !/*iChunks*/ ctx[4][0].event.allDay && create_if_block_1(ctx);
	let if_block2 = /*$nowIndicator*/ ctx[9] && /*isToday*/ ctx[5] && create_if_block$2();

	return {
		c() {
			div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("div");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.space)();
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("div");
			if (if_block0) if_block0.c();
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.space)();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.space)();
			if (if_block1) if_block1.c();
			t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.space)();
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("div");
			if (if_block2) if_block2.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div0, "class", div0_class_value = /*$theme*/ ctx[7].bgEvents);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div1, "class", div1_class_value = /*$theme*/ ctx[7].events);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div2, "class", div2_class_value = /*$theme*/ ctx[7].extra);

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div3, "class", div3_class_value = "" + (/*$theme*/ ctx[7].day + " " + /*$theme*/ ctx[7].weekdays?.[/*date*/ ctx[0].getUTCDay()] + (/*isToday*/ ctx[5] ? ' ' + /*$theme*/ ctx[7].today : '') + (/*highlight*/ ctx[6]
			? ' ' + /*$theme*/ ctx[7].highlight
			: '')));

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div3, "role", "cell");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.insert)(target, div3, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.append)(div3, div0);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				if (each_blocks_1[i]) {
					each_blocks_1[i].m(div0, null);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.append)(div3, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.append)(div3, div1);
			if (if_block0) if_block0.m(div1, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.append)(div1, t1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div1, null);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.append)(div1, t2);
			if (if_block1) if_block1.m(div1, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.append)(div3, t3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.append)(div3, div2);
			if (if_block2) if_block2.m(div2, null);
			/*div3_binding*/ ctx[28](div3);
			current = true;

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.listen)(div3, "pointerleave", function () {
						if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)(/*$_interaction*/ ctx[8].pointer?.leave)) /*$_interaction*/ ctx[8].pointer?.leave.apply(this, arguments);
					}),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.listen)(div3, "pointerdown", function () {
						if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)(/*$_interaction*/ ctx[8].action?.select)) /*$_interaction*/ ctx[8].action?.select.apply(this, arguments);
					})
				];

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty[0] & /*date, bgChunks*/ 9) {
				each_value_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.ensure_array_like)(/*bgChunks*/ ctx[3]);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.group_outros)();
				each_blocks_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.update_keyed_each)(each_blocks_1, dirty, get_key, 1, ctx, each_value_1, each0_lookup, div0, svelte_internal__WEBPACK_IMPORTED_MODULE_2__.outro_and_destroy_block, create_each_block_1$1, null, get_each_context_1$1);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.check_outros)();
			}

			if (!current || dirty[0] & /*$theme*/ 128 && div0_class_value !== (div0_class_value = /*$theme*/ ctx[7].bgEvents)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div0, "class", div0_class_value);
			}

			if (/*iChunks*/ ctx[4][1]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty[0] & /*iChunks*/ 16) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_2(ctx);
					if_block0.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(if_block0, 1);
					if_block0.m(div1, t1);
				}
			} else if (if_block0) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.check_outros)();
			}

			if (dirty[0] & /*date, chunks*/ 5) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.ensure_array_like)(/*chunks*/ ctx[2]);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.group_outros)();
				each_blocks = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.update_keyed_each)(each_blocks, dirty, get_key_1, 1, ctx, each_value, each1_lookup, div1, svelte_internal__WEBPACK_IMPORTED_MODULE_2__.outro_and_destroy_block, create_each_block$3, t2, get_each_context$3);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.check_outros)();
			}

			if (/*iChunks*/ ctx[4][0] && !/*iChunks*/ ctx[4][0].event.allDay) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty[0] & /*iChunks*/ 16) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_1(ctx);
					if_block1.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(if_block1, 1);
					if_block1.m(div1, null);
				}
			} else if (if_block1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.check_outros)();
			}

			if (!current || dirty[0] & /*$theme*/ 128 && div1_class_value !== (div1_class_value = /*$theme*/ ctx[7].events)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div1, "class", div1_class_value);
			}

			if (/*$nowIndicator*/ ctx[9] && /*isToday*/ ctx[5]) {
				if (if_block2) {
					if (dirty[0] & /*$nowIndicator, isToday*/ 544) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(if_block2, 1);
					}
				} else {
					if_block2 = create_if_block$2();
					if_block2.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(if_block2, 1);
					if_block2.m(div2, null);
				}
			} else if (if_block2) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(if_block2, 1, 1, () => {
					if_block2 = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.check_outros)();
			}

			if (!current || dirty[0] & /*$theme*/ 128 && div2_class_value !== (div2_class_value = /*$theme*/ ctx[7].extra)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div2, "class", div2_class_value);
			}

			if (!current || dirty[0] & /*$theme, date, isToday, highlight*/ 225 && div3_class_value !== (div3_class_value = "" + (/*$theme*/ ctx[7].day + " " + /*$theme*/ ctx[7].weekdays?.[/*date*/ ctx[0].getUTCDay()] + (/*isToday*/ ctx[5] ? ' ' + /*$theme*/ ctx[7].today : '') + (/*highlight*/ ctx[6]
			? ' ' + /*$theme*/ ctx[7].highlight
			: '')))) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div3, "class", div3_class_value);
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value_1.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(each_blocks_1[i]);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(if_block0);

			for (let i = 0; i < each_value.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(each_blocks[i]);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(if_block1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(if_block2);
			current = true;
		},
		o(local) {
			for (let i = 0; i < each_blocks_1.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(each_blocks_1[i]);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(if_block0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(each_blocks[i]);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(if_block1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(if_block2);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.detach)(div3);
			}

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].d();
			}

			if (if_block0) if_block0.d();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}

			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
			/*div3_binding*/ ctx[28](null);
			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.run_all)(dispose);
		}
	};
}

function instance$4($$self, $$props, $$invalidate) {
	let $slotHeight;
	let $slotDuration;
	let $_slotTimeLimits;
	let $highlightedDates;
	let $_today;
	let $_iEvents;
	let $_events;
	let $theme;
	let $_interaction;
	let $nowIndicator;
	let { date } = $$props;
	let { resource = undefined } = $$props;
	let { _events, _iEvents, highlightedDates, nowIndicator, slotDuration, slotHeight, theme, _interaction, _today, _slotTimeLimits } = (0,svelte__WEBPACK_IMPORTED_MODULE_3__.getContext)('state');
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _events, value => $$invalidate(27, $_events = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _iEvents, value => $$invalidate(26, $_iEvents = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, highlightedDates, value => $$invalidate(24, $highlightedDates = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, nowIndicator, value => $$invalidate(9, $nowIndicator = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, slotDuration, value => $$invalidate(30, $slotDuration = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, slotHeight, value => $$invalidate(29, $slotHeight = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, theme, value => $$invalidate(7, $theme = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _interaction, value => $$invalidate(8, $_interaction = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _today, value => $$invalidate(25, $_today = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _slotTimeLimits, value => $$invalidate(23, $_slotTimeLimits = value));
	let el;
	let chunks, bgChunks, iChunks = [];
	let isToday, highlight;
	let start, end;

	function dateFromPoint(x, y) {
		y -= (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.rect)(el).top;

		return {
			allDay: false,
			date: (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.addDuration)((0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.addDuration)((0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.cloneDate)(date), $_slotTimeLimits.min), $slotDuration, (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.floor)(y / $slotHeight)),
			resource,
			dayEl: el
		};
	}

	function div3_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_2__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(1, el);
		});
	}

	$$self.$$set = $$props => {
		if ('date' in $$props) $$invalidate(0, date = $$props.date);
		if ('resource' in $$props) $$invalidate(20, resource = $$props.resource);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*date, $_slotTimeLimits*/ 8388609) {
			{
				$$invalidate(21, start = (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.addDuration)((0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.cloneDate)(date), $_slotTimeLimits.min));
				$$invalidate(22, end = (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.addDuration)((0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.cloneDate)(date), $_slotTimeLimits.max));
			}
		}

		if ($$self.$$.dirty[0] & /*$_events, start, end, resource, bgChunks, chunks*/ 141557772) {
			{
				$$invalidate(2, chunks = []);
				$$invalidate(3, bgChunks = []);

				for (let event of $_events) {
					if (!event.allDay && (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.eventIntersects)(event, start, end, resource)) {
						let chunk = (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.createEventChunk)(event, start, end);

						switch (event.display) {
							case 'background':
								bgChunks.push(chunk);
								break;
							default:
								chunks.push(chunk);
						}
					}
				}

				groupEventChunks(chunks);
			}
		}

		if ($$self.$$.dirty[0] & /*$_iEvents, start, end, resource*/ 74448896) {
			$$invalidate(4, iChunks = $_iEvents.map(event => event && (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.eventIntersects)(event, start, end, resource)
			? (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.createEventChunk)(event, start, end)
			: null));
		}

		if ($$self.$$.dirty[0] & /*date, $_today*/ 33554433) {
			$$invalidate(5, isToday = (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.datesEqual)(date, $_today));
		}

		if ($$self.$$.dirty[0] & /*$highlightedDates, date*/ 16777217) {
			$$invalidate(6, highlight = $highlightedDates.some(d => (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.datesEqual)(d, date)));
		}

		if ($$self.$$.dirty[0] & /*el*/ 2) {
			if (el) {
				(0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.setPayload)(el, dateFromPoint);
			}
		}
	};

	return [
		date,
		el,
		chunks,
		bgChunks,
		iChunks,
		isToday,
		highlight,
		$theme,
		$_interaction,
		$nowIndicator,
		_events,
		_iEvents,
		highlightedDates,
		nowIndicator,
		slotDuration,
		slotHeight,
		theme,
		_interaction,
		_today,
		_slotTimeLimits,
		resource,
		start,
		end,
		$_slotTimeLimits,
		$highlightedDates,
		$_today,
		$_iEvents,
		$_events,
		div3_binding
	];
}

let Day$1 = class Day extends svelte_internal__WEBPACK_IMPORTED_MODULE_2__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.init)(this, options, instance$4, create_fragment$4, svelte_internal__WEBPACK_IMPORTED_MODULE_2__.safe_not_equal, { date: 0, resource: 20 }, null, [-1, -1]);
	}
};

/* packages/time-grid/src/all-day/Event.svelte generated by Svelte v4.2.16 */

function create_fragment$3(ctx) {
	let article;
	let div;
	let div_class_value;
	let setContent_action;
	let t;
	let switch_instance;
	let article_role_value;
	let article_tabindex_value;
	let current;
	let mounted;
	let dispose;
	var switch_value = /*$_interaction*/ ctx[10].resizer;

	function switch_props(ctx, dirty) {
		return { props: { event: /*event*/ ctx[0] } };
	}

	if (switch_value) {
		switch_instance = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.construct_svelte_component)(switch_value, switch_props(ctx));

		switch_instance.$on("pointerdown", function () {
			if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)(/*createDragHandler*/ ctx[30](/*$_interaction*/ ctx[10], 'x'))) /*createDragHandler*/ ctx[30](/*$_interaction*/ ctx[10], 'x').apply(this, arguments);
		});
	}

	return {
		c() {
			article = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("article");
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("div");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.space)();
			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.create_component)(switch_instance.$$.fragment);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div, "class", div_class_value = /*$theme*/ ctx[2].eventBody);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(article, "class", /*classes*/ ctx[4]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(article, "style", /*style*/ ctx[5]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(article, "role", article_role_value = /*onclick*/ ctx[7] ? 'button' : undefined);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(article, "tabindex", article_tabindex_value = /*onclick*/ ctx[7] ? 0 : undefined);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.insert)(target, article, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.append)(article, div);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.append)(article, t);
			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.mount_component)(switch_instance, article, null);
			/*article_binding*/ ctx[47](article);
			current = true;

			if (!mounted) {
				dispose = [
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.action_destroyer)(setContent_action = _event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.setContent.call(null, div, /*content*/ ctx[6])),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.listen)(article, "click", function () {
						if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)(/*onclick*/ ctx[7])) /*onclick*/ ctx[7].apply(this, arguments);
					}),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.listen)(article, "keydown", function () {
						if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)(/*onclick*/ ctx[7] && (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.keyEnter)(/*onclick*/ ctx[7]))) (/*onclick*/ ctx[7] && (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.keyEnter)(/*onclick*/ ctx[7])).apply(this, arguments);
					}),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.listen)(article, "mouseenter", function () {
						if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)(/*createHandler*/ ctx[29](/*$eventMouseEnter*/ ctx[8], /*display*/ ctx[1]))) /*createHandler*/ ctx[29](/*$eventMouseEnter*/ ctx[8], /*display*/ ctx[1]).apply(this, arguments);
					}),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.listen)(article, "mouseleave", function () {
						if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)(/*createHandler*/ ctx[29](/*$eventMouseLeave*/ ctx[9], /*display*/ ctx[1]))) /*createHandler*/ ctx[29](/*$eventMouseLeave*/ ctx[9], /*display*/ ctx[1]).apply(this, arguments);
					}),
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.listen)(article, "pointerdown", function () {
						if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)(!(0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.helperEvent)(/*display*/ ctx[1]) && /*createDragHandler*/ ctx[30](/*$_interaction*/ ctx[10]))) (!(0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.helperEvent)(/*display*/ ctx[1]) && /*createDragHandler*/ ctx[30](/*$_interaction*/ ctx[10])).apply(this, arguments);
					})
				];

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (!current || dirty[0] & /*$theme*/ 4 && div_class_value !== (div_class_value = /*$theme*/ ctx[2].eventBody)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div, "class", div_class_value);
			}

			if (setContent_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)(setContent_action.update) && dirty[0] & /*content*/ 64) setContent_action.update.call(null, /*content*/ ctx[6]);

			if (dirty[0] & /*$_interaction*/ 1024 && switch_value !== (switch_value = /*$_interaction*/ ctx[10].resizer)) {
				if (switch_instance) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.group_outros)();
					const old_component = switch_instance;

					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(old_component.$$.fragment, 1, 0, () => {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.destroy_component)(old_component, 1);
					});

					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.check_outros)();
				}

				if (switch_value) {
					switch_instance = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.construct_svelte_component)(switch_value, switch_props(ctx));

					switch_instance.$on("pointerdown", function () {
						if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)(/*createDragHandler*/ ctx[30](/*$_interaction*/ ctx[10], 'x'))) /*createDragHandler*/ ctx[30](/*$_interaction*/ ctx[10], 'x').apply(this, arguments);
					});

					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.create_component)(switch_instance.$$.fragment);
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(switch_instance.$$.fragment, 1);
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.mount_component)(switch_instance, article, null);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				const switch_instance_changes = {};
				if (dirty[0] & /*event*/ 1) switch_instance_changes.event = /*event*/ ctx[0];
				switch_instance.$set(switch_instance_changes);
			}

			if (!current || dirty[0] & /*classes*/ 16) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(article, "class", /*classes*/ ctx[4]);
			}

			if (!current || dirty[0] & /*style*/ 32) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(article, "style", /*style*/ ctx[5]);
			}

			if (!current || dirty[0] & /*onclick*/ 128 && article_role_value !== (article_role_value = /*onclick*/ ctx[7] ? 'button' : undefined)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(article, "role", article_role_value);
			}

			if (!current || dirty[0] & /*onclick*/ 128 && article_tabindex_value !== (article_tabindex_value = /*onclick*/ ctx[7] ? 0 : undefined)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(article, "tabindex", article_tabindex_value);
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.detach)(article);
			}

			if (switch_instance) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.destroy_component)(switch_instance);
			/*article_binding*/ ctx[47](null);
			mounted = false;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.run_all)(dispose);
		}
	};
}

function instance$3($$self, $$props, $$invalidate) {
	let $eventClick;
	let $_view;
	let $eventAllUpdated;
	let $eventDidMount;
	let $_intlEventTime;
	let $theme;
	let $eventContent;
	let $displayEventEnd;
	let $eventClassNames;
	let $_iClasses;
	let $eventTextColor;
	let $_resTxtColor;
	let $eventColor;
	let $eventBackgroundColor;
	let $_resBgColor;
	let $eventMouseEnter;
	let $eventMouseLeave;
	let $_interaction;
	let { chunk } = $$props;
	let { longChunks = {} } = $$props;
	let { displayEventEnd, eventAllUpdated, eventBackgroundColor, eventTextColor, eventClick, eventColor, eventContent, eventClassNames, eventDidMount, eventMouseEnter, eventMouseLeave, theme, _view, _intlEventTime, _interaction, _iClasses, _resBgColor, _resTxtColor, _tasks } = (0,svelte__WEBPACK_IMPORTED_MODULE_3__.getContext)('state');
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, displayEventEnd, value => $$invalidate(39, $displayEventEnd = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, eventAllUpdated, value => $$invalidate(49, $eventAllUpdated = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, eventBackgroundColor, value => $$invalidate(45, $eventBackgroundColor = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, eventTextColor, value => $$invalidate(42, $eventTextColor = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, eventClick, value => $$invalidate(35, $eventClick = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, eventColor, value => $$invalidate(44, $eventColor = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, eventContent, value => $$invalidate(38, $eventContent = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, eventClassNames, value => $$invalidate(40, $eventClassNames = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, eventDidMount, value => $$invalidate(50, $eventDidMount = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, eventMouseEnter, value => $$invalidate(8, $eventMouseEnter = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, eventMouseLeave, value => $$invalidate(9, $eventMouseLeave = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, theme, value => $$invalidate(2, $theme = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _view, value => $$invalidate(36, $_view = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _intlEventTime, value => $$invalidate(37, $_intlEventTime = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _interaction, value => $$invalidate(10, $_interaction = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _iClasses, value => $$invalidate(41, $_iClasses = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _resBgColor, value => $$invalidate(46, $_resBgColor = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _resTxtColor, value => $$invalidate(43, $_resTxtColor = value));
	let el;
	let event;
	let classes;
	let style;
	let content;
	let timeText;
	let margin = 1;
	let display;
	let onclick;

	(0,svelte__WEBPACK_IMPORTED_MODULE_3__.onMount)(() => {
		if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)($eventDidMount)) {
			$eventDidMount({
				event: (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.toEventWithLocalDates)(event),
				timeText,
				el,
				view: (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.toViewWithLocalDates)($_view)
			});
		}
	});

	(0,svelte__WEBPACK_IMPORTED_MODULE_3__.afterUpdate)(() => {
		if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)($eventAllUpdated) && !(0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.helperEvent)(display)) {
			(0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.task)(() => $eventAllUpdated({ view: (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.toViewWithLocalDates)($_view) }), 'eau', _tasks);
		}
	});

	function createHandler(fn, display) {
		return !(0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.helperEvent)(display) && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)(fn)
		? jsEvent => fn({
				event: (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.toEventWithLocalDates)(event),
				el,
				jsEvent,
				view: (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.toViewWithLocalDates)($_view)
			})
		: undefined;
	}

	function createDragHandler(interaction, resize) {
		return interaction.action
		? jsEvent => interaction.action.drag(event, jsEvent, resize, null, (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.rect)(el).top - (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.rect)((0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.ancestor)(el, 1)).top)
		: undefined;
	}

	function reposition() {
		if (!el) {
			return;
		}

		$$invalidate(34, margin = (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.repositionEvent)(chunk, longChunks, (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.height)(el)));
	}

	function article_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_2__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(3, el);
		});
	}

	$$self.$$set = $$props => {
		if ('chunk' in $$props) $$invalidate(31, chunk = $$props.chunk);
		if ('longChunks' in $$props) $$invalidate(32, longChunks = $$props.longChunks);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty[1] & /*chunk*/ 1) {
			$$invalidate(0, event = chunk.event);
		}

		if ($$self.$$.dirty[0] & /*event, style, $theme*/ 37 | $$self.$$.dirty[1] & /*$_resBgColor, $eventBackgroundColor, $eventColor, $_resTxtColor, $eventTextColor, chunk, margin, $_iClasses, $eventClassNames, $_view*/ 65065) {
			{
				$$invalidate(1, display = event.display);

				// Class & Style
				let bgColor = event.backgroundColor || $_resBgColor(event) || $eventBackgroundColor || $eventColor;

				let txtColor = event.textColor || $_resTxtColor(event) || $eventTextColor;
				$$invalidate(5, style = `width:calc(${chunk.days * 100}% + ${(chunk.days - 1) * 7}px);` + `margin-top:${event._margin ?? margin}px;`);

				if (bgColor) {
					$$invalidate(5, style += `background-color:${bgColor};`);
				}

				if (txtColor) {
					$$invalidate(5, style += `color:${txtColor};`);
				}

				$$invalidate(4, classes = [
					$theme.event,
					...$_iClasses([], event),
					...(0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.createEventClasses)($eventClassNames, event, $_view)
				].join(' '));
			}
		}

		if ($$self.$$.dirty[0] & /*$theme*/ 4 | $$self.$$.dirty[1] & /*chunk, $displayEventEnd, $eventContent, $_intlEventTime, $_view*/ 481) {
			// Content
			$$invalidate(6, [timeText, content] = (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.createEventContent)(chunk, $displayEventEnd, $eventContent, $theme, $_intlEventTime, $_view), content);
		}

		if ($$self.$$.dirty[0] & /*display*/ 2 | $$self.$$.dirty[1] & /*$eventClick*/ 16) {
			// Onclick handler
			$$invalidate(7, onclick = createHandler($eventClick, display));
		}
	};

	return [
		event,
		display,
		$theme,
		el,
		classes,
		style,
		content,
		onclick,
		$eventMouseEnter,
		$eventMouseLeave,
		$_interaction,
		displayEventEnd,
		eventAllUpdated,
		eventBackgroundColor,
		eventTextColor,
		eventClick,
		eventColor,
		eventContent,
		eventClassNames,
		eventDidMount,
		eventMouseEnter,
		eventMouseLeave,
		theme,
		_view,
		_intlEventTime,
		_interaction,
		_iClasses,
		_resBgColor,
		_resTxtColor,
		createHandler,
		createDragHandler,
		chunk,
		longChunks,
		reposition,
		margin,
		$eventClick,
		$_view,
		$_intlEventTime,
		$eventContent,
		$displayEventEnd,
		$eventClassNames,
		$_iClasses,
		$eventTextColor,
		$_resTxtColor,
		$eventColor,
		$eventBackgroundColor,
		$_resBgColor,
		article_binding
	];
}

class Event extends svelte_internal__WEBPACK_IMPORTED_MODULE_2__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.init)(
			this,
			options,
			instance$3,
			create_fragment$3,
			svelte_internal__WEBPACK_IMPORTED_MODULE_2__.safe_not_equal,
			{
				chunk: 31,
				longChunks: 32,
				reposition: 33
			},
			null,
			[-1, -1]
		);
	}

	get reposition() {
		return this.$$.ctx[33];
	}
}

/* packages/time-grid/src/all-day/Day.svelte generated by Svelte v4.2.16 */

function get_each_context$2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[21] = list[i];
	child_ctx[22] = list;
	child_ctx[23] = i;
	return child_ctx;
}

// (49:4) {#if iChunks[0] && datesEqual(iChunks[0].date, date)}
function create_if_block$1(ctx) {
	let div;
	let event;
	let div_class_value;
	let current;
	event = new Event({ props: { chunk: /*iChunks*/ ctx[2][0] } });

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.create_component)(event.$$.fragment);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div, "class", div_class_value = "" + (/*$theme*/ ctx[8].events + " " + /*$theme*/ ctx[8].preview));
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.mount_component)(event, div, null);
			current = true;
		},
		p(ctx, dirty) {
			const event_changes = {};
			if (dirty & /*iChunks*/ 4) event_changes.chunk = /*iChunks*/ ctx[2][0];
			event.$set(event_changes);

			if (!current || dirty & /*$theme*/ 256 && div_class_value !== (div_class_value = "" + (/*$theme*/ ctx[8].events + " " + /*$theme*/ ctx[8].preview))) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div, "class", div_class_value);
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(event.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(event.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.detach)(div);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.destroy_component)(event);
		}
	};
}

// (55:8) {#each dayChunks as chunk, i (chunk.event)}
function create_each_block$2(key_1, ctx) {
	let first;
	let event;
	let i = /*i*/ ctx[23];
	let current;
	const assign_event = () => /*event_binding*/ ctx[19](event, i);
	const unassign_event = () => /*event_binding*/ ctx[19](null, i);

	let event_props = {
		chunk: /*chunk*/ ctx[21],
		longChunks: /*longChunks*/ ctx[1]
	};

	event = new Event({ props: event_props });
	assign_event();

	return {
		key: key_1,
		first: null,
		c() {
			first = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.empty)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.create_component)(event.$$.fragment);
			this.first = first;
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.insert)(target, first, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.mount_component)(event, target, anchor);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (i !== /*i*/ ctx[23]) {
				unassign_event();
				i = /*i*/ ctx[23];
				assign_event();
			}

			const event_changes = {};
			if (dirty & /*dayChunks*/ 16) event_changes.chunk = /*chunk*/ ctx[21];
			if (dirty & /*longChunks*/ 2) event_changes.longChunks = /*longChunks*/ ctx[1];
			event.$set(event_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(event.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(event.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.detach)(first);
			}

			unassign_event();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.destroy_component)(event, detaching);
		}
	};
}

function create_fragment$2(ctx) {
	let div1;
	let show_if = /*iChunks*/ ctx[2][0] && (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.datesEqual)(/*iChunks*/ ctx[2][0].date, /*date*/ ctx[0]);
	let t;
	let div0;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let div0_class_value;
	let div1_class_value;
	let current;
	let mounted;
	let dispose;
	let if_block = show_if && create_if_block$1(ctx);
	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.ensure_array_like)(/*dayChunks*/ ctx[4]);
	const get_key = ctx => /*chunk*/ ctx[21].event;

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context$2(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block$2(key, child_ctx));
	}

	return {
		c() {
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("div");
			if (if_block) if_block.c();
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.space)();
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div0, "class", div0_class_value = /*$theme*/ ctx[8].events);

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div1, "class", div1_class_value = "" + (/*$theme*/ ctx[8].day + " " + /*$theme*/ ctx[8].weekdays?.[/*date*/ ctx[0].getUTCDay()] + (/*isToday*/ ctx[5] ? ' ' + /*$theme*/ ctx[8].today : '') + (/*highlight*/ ctx[6]
			? ' ' + /*$theme*/ ctx[8].highlight
			: '')));

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div1, "role", "cell");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.insert)(target, div1, anchor);
			if (if_block) if_block.m(div1, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.append)(div1, t);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.append)(div1, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div0, null);
				}
			}

			/*div1_binding*/ ctx[20](div1);
			current = true;

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.listen)(div1, "pointerdown", function () {
					if ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)(/*$_interaction*/ ctx[9].action?.select)) /*$_interaction*/ ctx[9].action?.select.apply(this, arguments);
				});

				mounted = true;
			}
		},
		p(new_ctx, [dirty]) {
			ctx = new_ctx;
			if (dirty & /*iChunks, date*/ 5) show_if = /*iChunks*/ ctx[2][0] && (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.datesEqual)(/*iChunks*/ ctx[2][0].date, /*date*/ ctx[0]);

			if (show_if) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*iChunks, date*/ 5) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(if_block, 1);
					}
				} else {
					if_block = create_if_block$1(ctx);
					if_block.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(if_block, 1);
					if_block.m(div1, t);
				}
			} else if (if_block) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(if_block, 1, 1, () => {
					if_block = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.check_outros)();
			}

			if (dirty & /*dayChunks, longChunks, refs*/ 146) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.ensure_array_like)(/*dayChunks*/ ctx[4]);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.group_outros)();
				each_blocks = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.update_keyed_each)(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div0, svelte_internal__WEBPACK_IMPORTED_MODULE_2__.outro_and_destroy_block, create_each_block$2, null, get_each_context$2);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.check_outros)();
			}

			if (!current || dirty & /*$theme*/ 256 && div0_class_value !== (div0_class_value = /*$theme*/ ctx[8].events)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div0, "class", div0_class_value);
			}

			if (!current || dirty & /*$theme, date, isToday, highlight*/ 353 && div1_class_value !== (div1_class_value = "" + (/*$theme*/ ctx[8].day + " " + /*$theme*/ ctx[8].weekdays?.[/*date*/ ctx[0].getUTCDay()] + (/*isToday*/ ctx[5] ? ' ' + /*$theme*/ ctx[8].today : '') + (/*highlight*/ ctx[6]
			? ' ' + /*$theme*/ ctx[8].highlight
			: '')))) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div1, "class", div1_class_value);
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(if_block);

			for (let i = 0; i < each_value.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(if_block);

			for (let i = 0; i < each_blocks.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.detach)(div1);
			}

			if (if_block) if_block.d();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}

			/*div1_binding*/ ctx[20](null);
			mounted = false;
			dispose();
		}
	};
}

function instance$2($$self, $$props, $$invalidate) {
	let $highlightedDates;
	let $_today;
	let $theme;
	let $_interaction;
	let { date } = $$props;
	let { chunks } = $$props;
	let { longChunks } = $$props;
	let { iChunks = [] } = $$props;
	let { resource = undefined } = $$props;
	let { highlightedDates, theme, _interaction, _today } = (0,svelte__WEBPACK_IMPORTED_MODULE_3__.getContext)('state');
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, highlightedDates, value => $$invalidate(17, $highlightedDates = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, theme, value => $$invalidate(8, $theme = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _interaction, value => $$invalidate(9, $_interaction = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _today, value => $$invalidate(18, $_today = value));
	let el;
	let dayChunks;
	let isToday;
	let highlight;
	let refs = [];

	function reposition() {
		(0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.runReposition)(refs, dayChunks);
	}

	function event_binding($$value, i) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_2__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			refs[i] = $$value;
			$$invalidate(7, refs);
		});
	}

	function div1_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_2__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			el = $$value;
			$$invalidate(3, el);
		});
	}

	$$self.$$set = $$props => {
		if ('date' in $$props) $$invalidate(0, date = $$props.date);
		if ('chunks' in $$props) $$invalidate(14, chunks = $$props.chunks);
		if ('longChunks' in $$props) $$invalidate(1, longChunks = $$props.longChunks);
		if ('iChunks' in $$props) $$invalidate(2, iChunks = $$props.iChunks);
		if ('resource' in $$props) $$invalidate(15, resource = $$props.resource);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*chunks, date, dayChunks*/ 16401) {
			{
				$$invalidate(4, dayChunks = []);

				for (let chunk of chunks) {
					if ((0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.datesEqual)(chunk.date, date)) {
						dayChunks.push(chunk);
					}
				}
			}
		}

		if ($$self.$$.dirty & /*date, $_today*/ 262145) {
			$$invalidate(5, isToday = (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.datesEqual)(date, $_today));
		}

		if ($$self.$$.dirty & /*$highlightedDates, date*/ 131073) {
			$$invalidate(6, highlight = $highlightedDates.some(d => (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.datesEqual)(d, date)));
		}

		if ($$self.$$.dirty & /*el, date, resource*/ 32777) {
			// dateFromPoint
			if (el) {
				(0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.setPayload)(el, () => ({ allDay: true, date, resource, dayEl: el }));
			}
		}
	};

	return [
		date,
		longChunks,
		iChunks,
		el,
		dayChunks,
		isToday,
		highlight,
		refs,
		$theme,
		$_interaction,
		highlightedDates,
		theme,
		_interaction,
		_today,
		chunks,
		resource,
		reposition,
		$highlightedDates,
		$_today,
		event_binding,
		div1_binding
	];
}

class Day extends svelte_internal__WEBPACK_IMPORTED_MODULE_2__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.init)(this, options, instance$2, create_fragment$2, svelte_internal__WEBPACK_IMPORTED_MODULE_2__.safe_not_equal, {
			date: 0,
			chunks: 14,
			longChunks: 1,
			iChunks: 2,
			resource: 15,
			reposition: 16
		});
	}

	get reposition() {
		return this.$$.ctx[16];
	}
}

/* packages/time-grid/src/all-day/Week.svelte generated by Svelte v4.2.16 */

function get_each_context$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[18] = list[i];
	child_ctx[19] = list;
	child_ctx[20] = i;
	return child_ctx;
}

// (59:0) {#each dates as date, i}
function create_each_block$1(ctx) {
	let day;
	let i = /*i*/ ctx[20];
	let current;
	const assign_day = () => /*day_binding*/ ctx[15](day, i);
	const unassign_day = () => /*day_binding*/ ctx[15](null, i);

	let day_props = {
		date: /*date*/ ctx[18],
		chunks: /*chunks*/ ctx[2],
		longChunks: /*longChunks*/ ctx[3],
		iChunks: /*iChunks*/ ctx[4],
		resource: /*resource*/ ctx[1]
	};

	day = new Day({ props: day_props });
	assign_day();

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.create_component)(day.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.mount_component)(day, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (i !== /*i*/ ctx[20]) {
				unassign_day();
				i = /*i*/ ctx[20];
				assign_day();
			}

			const day_changes = {};
			if (dirty & /*dates*/ 1) day_changes.date = /*date*/ ctx[18];
			if (dirty & /*chunks*/ 4) day_changes.chunks = /*chunks*/ ctx[2];
			if (dirty & /*longChunks*/ 8) day_changes.longChunks = /*longChunks*/ ctx[3];
			if (dirty & /*iChunks*/ 16) day_changes.iChunks = /*iChunks*/ ctx[4];
			if (dirty & /*resource*/ 2) day_changes.resource = /*resource*/ ctx[1];
			day.$set(day_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(day.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(day.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			unassign_day();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.destroy_component)(day, detaching);
		}
	};
}

function create_fragment$1(ctx) {
	let each_1_anchor;
	let current;
	let mounted;
	let dispose;
	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.ensure_array_like)(/*dates*/ ctx[0]);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
	}

	const out = i => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.empty)();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(target, anchor);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.insert)(target, each_1_anchor, anchor);
			current = true;

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.listen)(window, "resize", /*reposition*/ ctx[9]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*dates, chunks, longChunks, iChunks, resource, refs*/ 63) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.ensure_array_like)(/*dates*/ ctx[0]);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$1(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block$1(child_ctx);
						each_blocks[i].c();
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.group_outros)();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.check_outros)();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.detach)(each_1_anchor);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.destroy_each)(each_blocks, detaching);
			mounted = false;
			dispose();
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	let $hiddenDays;
	let $_iEvents;
	let $_events;
	let { dates } = $$props;
	let { resource = undefined } = $$props;
	let { _events, _iEvents, _queue2, hiddenDays } = (0,svelte__WEBPACK_IMPORTED_MODULE_3__.getContext)('state');
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _events, value => $$invalidate(14, $_events = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _iEvents, value => $$invalidate(13, $_iEvents = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, hiddenDays, value => $$invalidate(12, $hiddenDays = value));
	let chunks, longChunks, iChunks = [];
	let start;
	let end;
	let refs = [];
	let debounceHandle = {};

	function reposition() {
		(0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.debounce)(() => (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.runReposition)(refs, dates), debounceHandle, _queue2);
	}

	function day_binding($$value, i) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_2__.binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			refs[i] = $$value;
			$$invalidate(5, refs);
		});
	}

	$$self.$$set = $$props => {
		if ('dates' in $$props) $$invalidate(0, dates = $$props.dates);
		if ('resource' in $$props) $$invalidate(1, resource = $$props.resource);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*dates*/ 1) {
			{
				$$invalidate(10, start = dates[0]);
				$$invalidate(11, end = (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.addDay)((0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.cloneDate)(dates[dates.length - 1])));
			}
		}

		if ($$self.$$.dirty & /*$_events, start, end, resource, chunks, $hiddenDays*/ 23558) {
			{
				$$invalidate(2, chunks = []);

				for (let event of $_events) {
					if (event.allDay && !(0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.bgEvent)(event.display) && (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.eventIntersects)(event, start, end, resource)) {
						let chunk = (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.createEventChunk)(event, start, end);
						chunks.push(chunk);
					}
				}

				$$invalidate(3, longChunks = (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.prepareEventChunks)(chunks, $hiddenDays));

				// Run reposition only when events get changed
				reposition();
			}
		}

		if ($$self.$$.dirty & /*$_iEvents, start, end, resource, $hiddenDays*/ 15362) {
			$$invalidate(4, iChunks = $_iEvents.map(event => {
				let chunk;

				if (event && event.allDay && (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.eventIntersects)(event, start, end, resource)) {
					chunk = (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.createEventChunk)(event, start, end);
					(0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.prepareEventChunks)([chunk], $hiddenDays);
				} else {
					chunk = null;
				}

				return chunk;
			}));
		}
	};

	return [
		dates,
		resource,
		chunks,
		longChunks,
		iChunks,
		refs,
		_events,
		_iEvents,
		hiddenDays,
		reposition,
		start,
		end,
		$hiddenDays,
		$_iEvents,
		$_events,
		day_binding
	];
}

class Week extends svelte_internal__WEBPACK_IMPORTED_MODULE_2__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.init)(this, options, instance$1, create_fragment$1, svelte_internal__WEBPACK_IMPORTED_MODULE_2__.safe_not_equal, { dates: 0, resource: 1 });
	}
}

/* packages/time-grid/src/View.svelte generated by Svelte v4.2.16 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[10] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[10] = list[i];
	return child_ctx;
}

// (14:8) {#each $_viewDates as date}
function create_each_block_1(ctx) {
	let div;
	let time;
	let time_datetime_value;
	let time_aria_label_value;
	let setContent_action;
	let t;
	let div_class_value;
	let mounted;
	let dispose;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("div");
			time = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("time");
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(time, "datetime", time_datetime_value = (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.toISOString)(/*date*/ ctx[10], 10));
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(time, "aria-label", time_aria_label_value = /*$_intlDayHeaderAL*/ ctx[2].format(/*date*/ ctx[10]));
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div, "class", div_class_value = "" + (/*$theme*/ ctx[0].day + " " + /*$theme*/ ctx[0].weekdays?.[/*date*/ ctx[10].getUTCDay()]));
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div, "role", "columnheader");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.append)(div, time);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.append)(div, t);

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.action_destroyer)(setContent_action = _event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.setContent.call(null, time, /*$_intlDayHeader*/ ctx[3].format(/*date*/ ctx[10])));
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty & /*$_viewDates*/ 2 && time_datetime_value !== (time_datetime_value = (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.toISOString)(/*date*/ ctx[10], 10))) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(time, "datetime", time_datetime_value);
			}

			if (dirty & /*$_intlDayHeaderAL, $_viewDates*/ 6 && time_aria_label_value !== (time_aria_label_value = /*$_intlDayHeaderAL*/ ctx[2].format(/*date*/ ctx[10]))) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(time, "aria-label", time_aria_label_value);
			}

			if (setContent_action && (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.is_function)(setContent_action.update) && dirty & /*$_intlDayHeader, $_viewDates*/ 10) setContent_action.update.call(null, /*$_intlDayHeader*/ ctx[3].format(/*date*/ ctx[10]));

			if (dirty & /*$theme, $_viewDates*/ 3 && div_class_value !== (div_class_value = "" + (/*$theme*/ ctx[0].day + " " + /*$theme*/ ctx[0].weekdays?.[/*date*/ ctx[10].getUTCDay()]))) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div, "class", div_class_value);
			}
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.detach)(div);
			}

			mounted = false;
			dispose();
		}
	};
}

// (13:4) <Section>
function create_default_slot_2(ctx) {
	let each_1_anchor;
	let each_value_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.ensure_array_like)(/*$_viewDates*/ ctx[1]);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.empty)();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(target, anchor);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.insert)(target, each_1_anchor, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*$theme, $_viewDates, $_intlDayHeaderAL, $_intlDayHeader*/ 15) {
				each_value_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.ensure_array_like)(/*$_viewDates*/ ctx[1]);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.detach)(each_1_anchor);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.destroy_each)(each_blocks, detaching);
		}
	};
}

// (26:0) {#if $allDaySlot}
function create_if_block(ctx) {
	let div2;
	let div1;
	let section;
	let t;
	let div0;
	let div0_class_value;
	let div1_class_value;
	let div2_class_value;
	let current;

	section = new Section({
			props: {
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("div");
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.create_component)(section.$$.fragment);
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.space)();
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div0, "class", div0_class_value = /*$theme*/ ctx[0].hiddenScroll);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div1, "class", div1_class_value = /*$theme*/ ctx[0].content);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div2, "class", div2_class_value = /*$theme*/ ctx[0].allDay);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.insert)(target, div2, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.append)(div2, div1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.mount_component)(section, div1, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.append)(div1, t);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.append)(div1, div0);
			current = true;
		},
		p(ctx, dirty) {
			const section_changes = {};

			if (dirty & /*$$scope, $_viewDates*/ 32770) {
				section_changes.$$scope = { dirty, ctx };
			}

			section.$set(section_changes);

			if (!current || dirty & /*$theme*/ 1 && div0_class_value !== (div0_class_value = /*$theme*/ ctx[0].hiddenScroll)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div0, "class", div0_class_value);
			}

			if (!current || dirty & /*$theme*/ 1 && div1_class_value !== (div1_class_value = /*$theme*/ ctx[0].content)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div1, "class", div1_class_value);
			}

			if (!current || dirty & /*$theme*/ 1 && div2_class_value !== (div2_class_value = /*$theme*/ ctx[0].allDay)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div2, "class", div2_class_value);
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(section.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(section.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.detach)(div2);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.destroy_component)(section);
		}
	};
}

// (29:12) <Section>
function create_default_slot_1(ctx) {
	let week;
	let current;
	week = new Week({ props: { dates: /*$_viewDates*/ ctx[1] } });

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.create_component)(week.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.mount_component)(week, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const week_changes = {};
			if (dirty & /*$_viewDates*/ 2) week_changes.dates = /*$_viewDates*/ ctx[1];
			week.$set(week_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(week.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(week.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.destroy_component)(week, detaching);
		}
	};
}

// (37:0) {#each $_viewDates as date}
function create_each_block(ctx) {
	let day;
	let current;
	day = new Day$1({ props: { date: /*date*/ ctx[10] } });

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.create_component)(day.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.mount_component)(day, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const day_changes = {};
			if (dirty & /*$_viewDates*/ 2) day_changes.date = /*date*/ ctx[10];
			day.$set(day_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(day.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(day.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.destroy_component)(day, detaching);
		}
	};
}

// (36:0) <Body>
function create_default_slot(ctx) {
	let each_1_anchor;
	let current;
	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.ensure_array_like)(/*$_viewDates*/ ctx[1]);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.empty)();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(target, anchor);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.insert)(target, each_1_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*$_viewDates*/ 2) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.ensure_array_like)(/*$_viewDates*/ ctx[1]);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.group_outros)();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.check_outros)();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.detach)(each_1_anchor);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.destroy_each)(each_blocks, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div1;
	let section;
	let t0;
	let div0;
	let div0_class_value;
	let div1_class_value;
	let t1;
	let t2;
	let body;
	let current;

	section = new Section({
			props: {
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			}
		});

	let if_block = /*$allDaySlot*/ ctx[4] && create_if_block(ctx);

	body = new Body({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.create_component)(section.$$.fragment);
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.space)();
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.element)("div");
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.space)();
			if (if_block) if_block.c();
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.create_component)(body.$$.fragment);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div0, "class", div0_class_value = /*$theme*/ ctx[0].hiddenScroll);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div1, "class", div1_class_value = /*$theme*/ ctx[0].header);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.insert)(target, div1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.mount_component)(section, div1, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.append)(div1, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.append)(div1, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.insert)(target, t1, anchor);
			if (if_block) if_block.m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.insert)(target, t2, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.mount_component)(body, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const section_changes = {};

			if (dirty & /*$$scope, $_viewDates, $theme, $_intlDayHeaderAL, $_intlDayHeader*/ 32783) {
				section_changes.$$scope = { dirty, ctx };
			}

			section.$set(section_changes);

			if (!current || dirty & /*$theme*/ 1 && div0_class_value !== (div0_class_value = /*$theme*/ ctx[0].hiddenScroll)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div0, "class", div0_class_value);
			}

			if (!current || dirty & /*$theme*/ 1 && div1_class_value !== (div1_class_value = /*$theme*/ ctx[0].header)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.attr)(div1, "class", div1_class_value);
			}

			if (/*$allDaySlot*/ ctx[4]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*$allDaySlot*/ 16) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(if_block, 1);
					if_block.m(t2.parentNode, t2);
				}
			} else if (if_block) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(if_block, 1, 1, () => {
					if_block = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.check_outros)();
			}

			const body_changes = {};

			if (dirty & /*$$scope, $_viewDates*/ 32770) {
				body_changes.$$scope = { dirty, ctx };
			}

			body.$set(body_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(section.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(if_block);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_in)(body.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(section.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(if_block);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.transition_out)(body.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.detach)(div1);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.detach)(t1);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.detach)(t2);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.destroy_component)(section);
			if (if_block) if_block.d(detaching);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.destroy_component)(body, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $theme;
	let $_viewDates;
	let $_intlDayHeaderAL;
	let $_intlDayHeader;
	let $allDaySlot;
	let { _viewDates, _intlDayHeader, _intlDayHeaderAL, allDaySlot, theme } = (0,svelte__WEBPACK_IMPORTED_MODULE_3__.getContext)('state');
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _viewDates, value => $$invalidate(1, $_viewDates = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _intlDayHeader, value => $$invalidate(3, $_intlDayHeader = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, _intlDayHeaderAL, value => $$invalidate(2, $_intlDayHeaderAL = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, allDaySlot, value => $$invalidate(4, $allDaySlot = value));
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.component_subscribe)($$self, theme, value => $$invalidate(0, $theme = value));

	return [
		$theme,
		$_viewDates,
		$_intlDayHeaderAL,
		$_intlDayHeader,
		$allDaySlot,
		_viewDates,
		_intlDayHeader,
		_intlDayHeaderAL,
		allDaySlot,
		theme
	];
}

class View extends svelte_internal__WEBPACK_IMPORTED_MODULE_2__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_2__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_2__.safe_not_equal, {});
	}
}

var index = {
	createOptions(options) {
		// Common options
		options.buttonText.timeGridDay = 'day';
		options.buttonText.timeGridWeek = 'week';
		options.view = 'timeGridWeek';
		options.views.timeGridDay = {
			buttonText: _event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.btnTextDay,
			component: View,
			dayHeaderFormat: {weekday: 'long'},
			duration: {days: 1},
			theme: (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.themeView)('ec-time-grid ec-day-view'),
			titleFormat: {year: 'numeric', month: 'long', day: 'numeric'}
		};
		options.views.timeGridWeek = {
			buttonText: _event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.btnTextWeek,
			component: View,
			duration: {weeks: 1},
			theme: (0,_event_calendar_core__WEBPACK_IMPORTED_MODULE_0__.themeView)('ec-time-grid ec-week-view')
		};
	},

	createStores(state) {
		state._slotTimeLimits = slotTimeLimits(state);  // flexible limits
		state._times = times(state);
	}
};




/***/ }),

/***/ "./node_modules/svelte/src/runtime/index.js":
/*!**************************************************!*\
  !*** ./node_modules/svelte/src/runtime/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SvelteComponent: () => (/* reexport safe */ _internal_index_js__WEBPACK_IMPORTED_MODULE_0__.SvelteComponentDev),
/* harmony export */   SvelteComponentTyped: () => (/* reexport safe */ _internal_index_js__WEBPACK_IMPORTED_MODULE_0__.SvelteComponentTyped),
/* harmony export */   afterUpdate: () => (/* reexport safe */ _internal_index_js__WEBPACK_IMPORTED_MODULE_0__.afterUpdate),
/* harmony export */   beforeUpdate: () => (/* reexport safe */ _internal_index_js__WEBPACK_IMPORTED_MODULE_0__.beforeUpdate),
/* harmony export */   createEventDispatcher: () => (/* reexport safe */ _internal_index_js__WEBPACK_IMPORTED_MODULE_0__.createEventDispatcher),
/* harmony export */   getAllContexts: () => (/* reexport safe */ _internal_index_js__WEBPACK_IMPORTED_MODULE_0__.getAllContexts),
/* harmony export */   getContext: () => (/* reexport safe */ _internal_index_js__WEBPACK_IMPORTED_MODULE_0__.getContext),
/* harmony export */   hasContext: () => (/* reexport safe */ _internal_index_js__WEBPACK_IMPORTED_MODULE_0__.hasContext),
/* harmony export */   onDestroy: () => (/* reexport safe */ _internal_index_js__WEBPACK_IMPORTED_MODULE_0__.onDestroy),
/* harmony export */   onMount: () => (/* reexport safe */ _internal_index_js__WEBPACK_IMPORTED_MODULE_0__.onMount),
/* harmony export */   setContext: () => (/* reexport safe */ _internal_index_js__WEBPACK_IMPORTED_MODULE_0__.setContext),
/* harmony export */   tick: () => (/* reexport safe */ _internal_index_js__WEBPACK_IMPORTED_MODULE_0__.tick)
/* harmony export */ });
/* harmony import */ var _internal_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/index.js */ "./node_modules/svelte/src/runtime/internal/index.js");



/***/ }),

/***/ "./node_modules/svelte/src/runtime/internal/Component.js":
/*!***************************************************************!*\
  !*** ./node_modules/svelte/src/runtime/internal/Component.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SvelteComponent: () => (/* binding */ SvelteComponent),
/* harmony export */   SvelteElement: () => (/* binding */ SvelteElement),
/* harmony export */   bind: () => (/* binding */ bind),
/* harmony export */   claim_component: () => (/* binding */ claim_component),
/* harmony export */   create_component: () => (/* binding */ create_component),
/* harmony export */   create_custom_element: () => (/* binding */ create_custom_element),
/* harmony export */   destroy_component: () => (/* binding */ destroy_component),
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   mount_component: () => (/* binding */ mount_component)
/* harmony export */ });
/* harmony import */ var _scheduler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduler.js */ "./node_modules/svelte/src/runtime/internal/scheduler.js");
/* harmony import */ var _lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lifecycle.js */ "./node_modules/svelte/src/runtime/internal/lifecycle.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/svelte/src/runtime/internal/utils.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ "./node_modules/svelte/src/runtime/internal/dom.js");
/* harmony import */ var _transitions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transitions.js */ "./node_modules/svelte/src/runtime/internal/transitions.js");






/** @returns {void} */
function bind(component, name, callback) {
	const index = component.$$.props[name];
	if (index !== undefined) {
		component.$$.bound[index] = callback;
		callback(component.$$.ctx[index]);
	}
}

/** @returns {void} */
function create_component(block) {
	block && block.c();
}

/** @returns {void} */
function claim_component(block, parent_nodes) {
	block && block.l(parent_nodes);
}

/** @returns {void} */
function mount_component(component, target, anchor) {
	const { fragment, after_update } = component.$$;
	fragment && fragment.m(target, anchor);
	// onMount happens before the initial afterUpdate
	(0,_scheduler_js__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(() => {
		const new_on_destroy = component.$$.on_mount.map(_utils_js__WEBPACK_IMPORTED_MODULE_2__.run).filter(_utils_js__WEBPACK_IMPORTED_MODULE_2__.is_function);
		// if the component was destroyed immediately
		// it will update the `$$.on_destroy` reference to `null`.
		// the destructured on_destroy may still reference to the old array
		if (component.$$.on_destroy) {
			component.$$.on_destroy.push(...new_on_destroy);
		} else {
			// Edge case - component was destroyed immediately,
			// most likely as a result of a binding initialising
			(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.run_all)(new_on_destroy);
		}
		component.$$.on_mount = [];
	});
	after_update.forEach(_scheduler_js__WEBPACK_IMPORTED_MODULE_0__.add_render_callback);
}

/** @returns {void} */
function destroy_component(component, detaching) {
	const $$ = component.$$;
	if ($$.fragment !== null) {
		(0,_scheduler_js__WEBPACK_IMPORTED_MODULE_0__.flush_render_callbacks)($$.after_update);
		(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.run_all)($$.on_destroy);
		$$.fragment && $$.fragment.d(detaching);
		// TODO null out other refs, including component.$$ (but need to
		// preserve final state?)
		$$.on_destroy = $$.fragment = null;
		$$.ctx = [];
	}
}

/** @returns {void} */
function make_dirty(component, i) {
	if (component.$$.dirty[0] === -1) {
		_scheduler_js__WEBPACK_IMPORTED_MODULE_0__.dirty_components.push(component);
		(0,_scheduler_js__WEBPACK_IMPORTED_MODULE_0__.schedule_update)();
		component.$$.dirty.fill(0);
	}
	component.$$.dirty[(i / 31) | 0] |= 1 << i % 31;
}

// TODO: Document the other params
/**
 * @param {SvelteComponent} component
 * @param {import('./public.js').ComponentConstructorOptions} options
 *
 * @param {import('./utils.js')['not_equal']} not_equal Used to compare props and state values.
 * @param {(target: Element | ShadowRoot) => void} [append_styles] Function that appends styles to the DOM when the component is first initialised.
 * This will be the `add_css` function from the compiled component.
 *
 * @returns {void}
 */
function init(
	component,
	options,
	instance,
	create_fragment,
	not_equal,
	props,
	append_styles = null,
	dirty = [-1]
) {
	const parent_component = _lifecycle_js__WEBPACK_IMPORTED_MODULE_1__.current_component;
	(0,_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__.set_current_component)(component);
	/** @type {import('./private.js').T$$} */
	const $$ = (component.$$ = {
		fragment: null,
		ctx: [],
		// state
		props,
		update: _utils_js__WEBPACK_IMPORTED_MODULE_2__.noop,
		not_equal,
		bound: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.blank_object)(),
		// lifecycle
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
		// everything else
		callbacks: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.blank_object)(),
		dirty,
		skip_bound: false,
		root: options.target || parent_component.$$.root
	});
	append_styles && append_styles($$.root);
	let ready = false;
	$$.ctx = instance
		? instance(component, options.props || {}, (i, ret, ...rest) => {
				const value = rest.length ? rest[0] : ret;
				if ($$.ctx && not_equal($$.ctx[i], ($$.ctx[i] = value))) {
					if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
					if (ready) make_dirty(component, i);
				}
				return ret;
		  })
		: [];
	$$.update();
	ready = true;
	(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.run_all)($$.before_update);
	// `false` as a special case of no DOM component
	$$.fragment = create_fragment ? create_fragment($$.ctx) : false;
	if (options.target) {
		if (options.hydrate) {
			(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.start_hydrating)();
			// TODO: what is the correct type here?
			// @ts-expect-error
			const nodes = (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.children)(options.target);
			$$.fragment && $$.fragment.l(nodes);
			nodes.forEach(_dom_js__WEBPACK_IMPORTED_MODULE_3__.detach);
		} else {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			$$.fragment && $$.fragment.c();
		}
		if (options.intro) (0,_transitions_js__WEBPACK_IMPORTED_MODULE_4__.transition_in)(component.$$.fragment);
		mount_component(component, options.target, options.anchor);
		(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.end_hydrating)();
		(0,_scheduler_js__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
	(0,_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__.set_current_component)(parent_component);
}

let SvelteElement;

if (typeof HTMLElement === 'function') {
	SvelteElement = class extends HTMLElement {
		/** The Svelte component constructor */
		$$ctor;
		/** Slots */
		$$s;
		/** The Svelte component instance */
		$$c;
		/** Whether or not the custom element is connected */
		$$cn = false;
		/** Component props data */
		$$d = {};
		/** `true` if currently in the process of reflecting component props back to attributes */
		$$r = false;
		/** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
		$$p_d = {};
		/** @type {Record<string, Function[]>} Event listeners */
		$$l = {};
		/** @type {Map<Function, Function>} Event listener unsubscribe functions */
		$$l_u = new Map();

		constructor($$componentCtor, $$slots, use_shadow_dom) {
			super();
			this.$$ctor = $$componentCtor;
			this.$$s = $$slots;
			if (use_shadow_dom) {
				this.attachShadow({ mode: 'open' });
			}
		}

		addEventListener(type, listener, options) {
			// We can't determine upfront if the event is a custom event or not, so we have to
			// listen to both. If someone uses a custom event with the same name as a regular
			// browser event, this fires twice - we can't avoid that.
			this.$$l[type] = this.$$l[type] || [];
			this.$$l[type].push(listener);
			if (this.$$c) {
				const unsub = this.$$c.$on(type, listener);
				this.$$l_u.set(listener, unsub);
			}
			super.addEventListener(type, listener, options);
		}

		removeEventListener(type, listener, options) {
			super.removeEventListener(type, listener, options);
			if (this.$$c) {
				const unsub = this.$$l_u.get(listener);
				if (unsub) {
					unsub();
					this.$$l_u.delete(listener);
				}
			}
		}

		async connectedCallback() {
			this.$$cn = true;
			if (!this.$$c) {
				// We wait one tick to let possible child slot elements be created/mounted
				await Promise.resolve();
				if (!this.$$cn || this.$$c) {
					return;
				}
				function create_slot(name) {
					return () => {
						let node;
						const obj = {
							c: function create() {
								node = (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.element)('slot');
								if (name !== 'default') {
									(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.attr)(node, 'name', name);
								}
							},
							/**
							 * @param {HTMLElement} target
							 * @param {HTMLElement} [anchor]
							 */
							m: function mount(target, anchor) {
								(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.insert)(target, node, anchor);
							},
							d: function destroy(detaching) {
								if (detaching) {
									(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.detach)(node);
								}
							}
						};
						return obj;
					};
				}
				const $$slots = {};
				const existing_slots = (0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.get_custom_elements_slots)(this);
				for (const name of this.$$s) {
					if (name in existing_slots) {
						$$slots[name] = [create_slot(name)];
					}
				}
				for (const attribute of this.attributes) {
					// this.$$data takes precedence over this.attributes
					const name = this.$$g_p(attribute.name);
					if (!(name in this.$$d)) {
						this.$$d[name] = get_custom_element_value(name, attribute.value, this.$$p_d, 'toProp');
					}
				}
				// Port over props that were set programmatically before ce was initialized
				for (const key in this.$$p_d) {
					if (!(key in this.$$d) && this[key] !== undefined) {
						this.$$d[key] = this[key]; // don't transform, these were set through JavaScript
						delete this[key]; // remove the property that shadows the getter/setter
					}
				}
				this.$$c = new this.$$ctor({
					target: this.shadowRoot || this,
					props: {
						...this.$$d,
						$$slots,
						$$scope: {
							ctx: []
						}
					}
				});

				// Reflect component props as attributes
				const reflect_attributes = () => {
					this.$$r = true;
					for (const key in this.$$p_d) {
						this.$$d[key] = this.$$c.$$.ctx[this.$$c.$$.props[key]];
						if (this.$$p_d[key].reflect) {
							const attribute_value = get_custom_element_value(
								key,
								this.$$d[key],
								this.$$p_d,
								'toAttribute'
							);
							if (attribute_value == null) {
								this.removeAttribute(this.$$p_d[key].attribute || key);
							} else {
								this.setAttribute(this.$$p_d[key].attribute || key, attribute_value);
							}
						}
					}
					this.$$r = false;
				};
				this.$$c.$$.after_update.push(reflect_attributes);
				reflect_attributes(); // once initially because after_update is added too late for first render

				for (const type in this.$$l) {
					for (const listener of this.$$l[type]) {
						const unsub = this.$$c.$on(type, listener);
						this.$$l_u.set(listener, unsub);
					}
				}
				this.$$l = {};
			}
		}

		// We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
		// and setting attributes through setAttribute etc, this is helpful
		attributeChangedCallback(attr, _oldValue, newValue) {
			if (this.$$r) return;
			attr = this.$$g_p(attr);
			this.$$d[attr] = get_custom_element_value(attr, newValue, this.$$p_d, 'toProp');
			this.$$c?.$set({ [attr]: this.$$d[attr] });
		}

		disconnectedCallback() {
			this.$$cn = false;
			// In a microtask, because this could be a move within the DOM
			Promise.resolve().then(() => {
				if (!this.$$cn && this.$$c) {
					this.$$c.$destroy();
					this.$$c = undefined;
				}
			});
		}

		$$g_p(attribute_name) {
			return (
				Object.keys(this.$$p_d).find(
					(key) =>
						this.$$p_d[key].attribute === attribute_name ||
						(!this.$$p_d[key].attribute && key.toLowerCase() === attribute_name)
				) || attribute_name
			);
		}
	};
}

/**
 * @param {string} prop
 * @param {any} value
 * @param {Record<string, CustomElementPropDefinition>} props_definition
 * @param {'toAttribute' | 'toProp'} [transform]
 */
function get_custom_element_value(prop, value, props_definition, transform) {
	const type = props_definition[prop]?.type;
	value = type === 'Boolean' && typeof value !== 'boolean' ? value != null : value;
	if (!transform || !props_definition[prop]) {
		return value;
	} else if (transform === 'toAttribute') {
		switch (type) {
			case 'Object':
			case 'Array':
				return value == null ? null : JSON.stringify(value);
			case 'Boolean':
				return value ? '' : null;
			case 'Number':
				return value == null ? null : value;
			default:
				return value;
		}
	} else {
		switch (type) {
			case 'Object':
			case 'Array':
				return value && JSON.parse(value);
			case 'Boolean':
				return value; // conversion already handled above
			case 'Number':
				return value != null ? +value : value;
			default:
				return value;
		}
	}
}

/**
 * @internal
 *
 * Turn a Svelte component into a custom element.
 * @param {import('./public.js').ComponentType} Component  A Svelte component constructor
 * @param {Record<string, CustomElementPropDefinition>} props_definition  The props to observe
 * @param {string[]} slots  The slots to create
 * @param {string[]} accessors  Other accessors besides the ones for props the component has
 * @param {boolean} use_shadow_dom  Whether to use shadow DOM
 * @param {(ce: new () => HTMLElement) => new () => HTMLElement} [extend]
 */
function create_custom_element(
	Component,
	props_definition,
	slots,
	accessors,
	use_shadow_dom,
	extend
) {
	let Class = class extends SvelteElement {
		constructor() {
			super(Component, slots, use_shadow_dom);
			this.$$p_d = props_definition;
		}
		static get observedAttributes() {
			return Object.keys(props_definition).map((key) =>
				(props_definition[key].attribute || key).toLowerCase()
			);
		}
	};
	Object.keys(props_definition).forEach((prop) => {
		Object.defineProperty(Class.prototype, prop, {
			get() {
				return this.$$c && prop in this.$$c ? this.$$c[prop] : this.$$d[prop];
			},
			set(value) {
				value = get_custom_element_value(prop, value, props_definition);
				this.$$d[prop] = value;
				this.$$c?.$set({ [prop]: value });
			}
		});
	});
	accessors.forEach((accessor) => {
		Object.defineProperty(Class.prototype, accessor, {
			get() {
				return this.$$c?.[accessor];
			}
		});
	});
	if (extend) {
		// @ts-expect-error - assigning here is fine
		Class = extend(Class);
	}
	Component.element = /** @type {any} */ (Class);
	return Class;
}

/**
 * Base class for Svelte components. Used when dev=false.
 *
 * @template {Record<string, any>} [Props=any]
 * @template {Record<string, any>} [Events=any]
 */
class SvelteComponent {
	/**
	 * ### PRIVATE API
	 *
	 * Do not use, may change at any time
	 *
	 * @type {any}
	 */
	$$ = undefined;
	/**
	 * ### PRIVATE API
	 *
	 * Do not use, may change at any time
	 *
	 * @type {any}
	 */
	$$set = undefined;

	/** @returns {void} */
	$destroy() {
		destroy_component(this, 1);
		this.$destroy = _utils_js__WEBPACK_IMPORTED_MODULE_2__.noop;
	}

	/**
	 * @template {Extract<keyof Events, string>} K
	 * @param {K} type
	 * @param {((e: Events[K]) => void) | null | undefined} callback
	 * @returns {() => void}
	 */
	$on(type, callback) {
		if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.is_function)(callback)) {
			return _utils_js__WEBPACK_IMPORTED_MODULE_2__.noop;
		}
		const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
		callbacks.push(callback);
		return () => {
			const index = callbacks.indexOf(callback);
			if (index !== -1) callbacks.splice(index, 1);
		};
	}

	/**
	 * @param {Partial<Props>} props
	 * @returns {void}
	 */
	$set(props) {
		if (this.$$set && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.is_empty)(props)) {
			this.$$.skip_bound = true;
			this.$$set(props);
			this.$$.skip_bound = false;
		}
	}
}

/**
 * @typedef {Object} CustomElementPropDefinition
 * @property {string} [attribute]
 * @property {boolean} [reflect]
 * @property {'String'|'Boolean'|'Number'|'Array'|'Object'} [type]
 */


/***/ }),

/***/ "./node_modules/svelte/src/runtime/internal/ResizeObserverSingleton.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/svelte/src/runtime/internal/ResizeObserverSingleton.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResizeObserverSingleton: () => (/* binding */ ResizeObserverSingleton)
/* harmony export */ });
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals.js */ "./node_modules/svelte/src/runtime/internal/globals.js");


/**
 * Resize observer singleton.
 * One listener per element only!
 * https://groups.google.com/a/chromium.org/g/blink-dev/c/z6ienONUb5A/m/F5-VcUZtBAAJ
 */
class ResizeObserverSingleton {
	/**
	 * @private
	 * @readonly
	 * @type {WeakMap<Element, import('./private.js').Listener>}
	 */
	_listeners = "WeakMap" in _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals ? new WeakMap() : undefined;

	/**
	 * @private
	 * @type {ResizeObserver}
	 */
	_observer = undefined;

	/** @type {ResizeObserverOptions} */
	options;

	/** @param {ResizeObserverOptions} options */
	constructor(options) {
		this.options = options;
	}

	/**
	 * @param {Element} element
	 * @param {import('./private.js').Listener} listener
	 * @returns {() => void}
	 */
	observe(element, listener) {
		this._listeners.set(element, listener);
		this._getObserver().observe(element, this.options);
		return () => {
			this._listeners.delete(element);
			this._observer.unobserve(element); // this line can probably be removed
		};
	}

	/**
	 * @private
	 */
	_getObserver() {
		return (
			this._observer ??
			(this._observer = new ResizeObserver((entries) => {
				for (const entry of entries) {
					ResizeObserverSingleton.entries.set(entry.target, entry);
					this._listeners.get(entry.target)?.(entry);
				}
			}))
		);
	}
}

// Needs to be written like this to pass the tree-shake-test
ResizeObserverSingleton.entries = "WeakMap" in _globals_js__WEBPACK_IMPORTED_MODULE_0__.globals ? new WeakMap() : undefined;


/***/ }),

/***/ "./node_modules/svelte/src/runtime/internal/animations.js":
/*!****************************************************************!*\
  !*** ./node_modules/svelte/src/runtime/internal/animations.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add_transform: () => (/* binding */ add_transform),
/* harmony export */   create_animation: () => (/* binding */ create_animation),
/* harmony export */   fix_position: () => (/* binding */ fix_position)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/svelte/src/runtime/internal/utils.js");
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment.js */ "./node_modules/svelte/src/runtime/internal/environment.js");
/* harmony import */ var _loop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loop.js */ "./node_modules/svelte/src/runtime/internal/loop.js");
/* harmony import */ var _style_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style_manager.js */ "./node_modules/svelte/src/runtime/internal/style_manager.js");





/**
 * @param {Element & ElementCSSInlineStyle} node
 * @param {import('./private.js').PositionRect} from
 * @param {import('./private.js').AnimationFn} fn
 */
function create_animation(node, from, fn, params) {
	if (!from) return _utils_js__WEBPACK_IMPORTED_MODULE_0__.noop;
	const to = node.getBoundingClientRect();
	if (
		from.left === to.left &&
		from.right === to.right &&
		from.top === to.top &&
		from.bottom === to.bottom
	)
		return _utils_js__WEBPACK_IMPORTED_MODULE_0__.noop;
	const {
		delay = 0,
		duration = 300,
		easing = _utils_js__WEBPACK_IMPORTED_MODULE_0__.identity,
		// @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
		start: start_time = (0,_environment_js__WEBPACK_IMPORTED_MODULE_1__.now)() + delay,
		// @ts-ignore todo:
		end = start_time + duration,
		tick = _utils_js__WEBPACK_IMPORTED_MODULE_0__.noop,
		css
	} = fn(node, { from, to }, params);
	let running = true;
	let started = false;
	let name;
	/** @returns {void} */
	function start() {
		if (css) {
			name = (0,_style_manager_js__WEBPACK_IMPORTED_MODULE_3__.create_rule)(node, 0, 1, duration, delay, easing, css);
		}
		if (!delay) {
			started = true;
		}
	}
	/** @returns {void} */
	function stop() {
		if (css) (0,_style_manager_js__WEBPACK_IMPORTED_MODULE_3__.delete_rule)(node, name);
		running = false;
	}
	(0,_loop_js__WEBPACK_IMPORTED_MODULE_2__.loop)((now) => {
		if (!started && now >= start_time) {
			started = true;
		}
		if (started && now >= end) {
			tick(1, 0);
			stop();
		}
		if (!running) {
			return false;
		}
		if (started) {
			const p = now - start_time;
			const t = 0 + 1 * easing(p / duration);
			tick(t, 1 - t);
		}
		return true;
	});
	start();
	tick(0, 1);
	return stop;
}

/**
 * @param {Element & ElementCSSInlineStyle} node
 * @returns {void}
 */
function fix_position(node) {
	const style = getComputedStyle(node);
	if (style.position !== 'absolute' && style.position !== 'fixed') {
		const { width, height } = style;
		const a = node.getBoundingClientRect();
		node.style.position = 'absolute';
		node.style.width = width;
		node.style.height = height;
		add_transform(node, a);
	}
}

/**
 * @param {Element & ElementCSSInlineStyle} node
 * @param {import('./private.js').PositionRect} a
 * @returns {void}
 */
function add_transform(node, a) {
	const b = node.getBoundingClientRect();
	if (a.left !== b.left || a.top !== b.top) {
		const style = getComputedStyle(node);
		const transform = style.transform === 'none' ? '' : style.transform;
		node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/runtime/internal/await_block.js":
/*!*****************************************************************!*\
  !*** ./node_modules/svelte/src/runtime/internal/await_block.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handle_promise: () => (/* binding */ handle_promise),
/* harmony export */   update_await_block_branch: () => (/* binding */ update_await_block_branch)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/svelte/src/runtime/internal/utils.js");
/* harmony import */ var _transitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitions.js */ "./node_modules/svelte/src/runtime/internal/transitions.js");
/* harmony import */ var _scheduler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scheduler.js */ "./node_modules/svelte/src/runtime/internal/scheduler.js");
/* harmony import */ var _lifecycle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lifecycle.js */ "./node_modules/svelte/src/runtime/internal/lifecycle.js");





/**
 * @template T
 * @param {Promise<T>} promise
 * @param {import('./private.js').PromiseInfo<T>} info
 * @returns {boolean}
 */
function handle_promise(promise, info) {
	const token = (info.token = {});
	/**
	 * @param {import('./private.js').FragmentFactory} type
	 * @param {0 | 1 | 2} index
	 * @param {number} [key]
	 * @param {any} [value]
	 * @returns {void}
	 */
	function update(type, index, key, value) {
		if (info.token !== token) return;
		info.resolved = value;
		let child_ctx = info.ctx;
		if (key !== undefined) {
			child_ctx = child_ctx.slice();
			child_ctx[key] = value;
		}
		const block = type && (info.current = type)(child_ctx);
		let needs_flush = false;
		if (info.block) {
			if (info.blocks) {
				info.blocks.forEach((block, i) => {
					if (i !== index && block) {
						(0,_transitions_js__WEBPACK_IMPORTED_MODULE_1__.group_outros)();
						(0,_transitions_js__WEBPACK_IMPORTED_MODULE_1__.transition_out)(block, 1, 1, () => {
							if (info.blocks[i] === block) {
								info.blocks[i] = null;
							}
						});
						(0,_transitions_js__WEBPACK_IMPORTED_MODULE_1__.check_outros)();
					}
				});
			} else {
				info.block.d(1);
			}
			block.c();
			(0,_transitions_js__WEBPACK_IMPORTED_MODULE_1__.transition_in)(block, 1);
			block.m(info.mount(), info.anchor);
			needs_flush = true;
		}
		info.block = block;
		if (info.blocks) info.blocks[index] = block;
		if (needs_flush) {
			(0,_scheduler_js__WEBPACK_IMPORTED_MODULE_2__.flush)();
		}
	}
	if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.is_promise)(promise)) {
		const current_component = (0,_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__.get_current_component)();
		promise.then(
			(value) => {
				(0,_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__.set_current_component)(current_component);
				update(info.then, 1, info.value, value);
				(0,_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__.set_current_component)(null);
			},
			(error) => {
				(0,_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__.set_current_component)(current_component);
				update(info.catch, 2, info.error, error);
				(0,_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__.set_current_component)(null);
				if (!info.hasCatch) {
					throw error;
				}
			}
		);
		// if we previously had a then/catch block, destroy it
		if (info.current !== info.pending) {
			update(info.pending, 0);
			return true;
		}
	} else {
		if (info.current !== info.then) {
			update(info.then, 1, info.value, promise);
			return true;
		}
		info.resolved = /** @type {T} */ (promise);
	}
}

/** @returns {void} */
function update_await_block_branch(info, ctx, dirty) {
	const child_ctx = ctx.slice();
	const { resolved } = info;
	if (info.current === info.then) {
		child_ctx[info.value] = resolved;
	}
	if (info.current === info.catch) {
		child_ctx[info.error] = resolved;
	}
	info.block.p(child_ctx, dirty);
}


/***/ }),

/***/ "./node_modules/svelte/src/runtime/internal/dev.js":
/*!*********************************************************!*\
  !*** ./node_modules/svelte/src/runtime/internal/dev.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SvelteComponentDev: () => (/* binding */ SvelteComponentDev),
/* harmony export */   SvelteComponentTyped: () => (/* binding */ SvelteComponentTyped),
/* harmony export */   append_dev: () => (/* binding */ append_dev),
/* harmony export */   append_hydration_dev: () => (/* binding */ append_hydration_dev),
/* harmony export */   attr_dev: () => (/* binding */ attr_dev),
/* harmony export */   construct_svelte_component_dev: () => (/* binding */ construct_svelte_component_dev),
/* harmony export */   dataset_dev: () => (/* binding */ dataset_dev),
/* harmony export */   detach_after_dev: () => (/* binding */ detach_after_dev),
/* harmony export */   detach_before_dev: () => (/* binding */ detach_before_dev),
/* harmony export */   detach_between_dev: () => (/* binding */ detach_between_dev),
/* harmony export */   detach_dev: () => (/* binding */ detach_dev),
/* harmony export */   dispatch_dev: () => (/* binding */ dispatch_dev),
/* harmony export */   ensure_array_like_dev: () => (/* binding */ ensure_array_like_dev),
/* harmony export */   insert_dev: () => (/* binding */ insert_dev),
/* harmony export */   insert_hydration_dev: () => (/* binding */ insert_hydration_dev),
/* harmony export */   listen_dev: () => (/* binding */ listen_dev),
/* harmony export */   loop_guard: () => (/* binding */ loop_guard),
/* harmony export */   prop_dev: () => (/* binding */ prop_dev),
/* harmony export */   set_data_contenteditable_dev: () => (/* binding */ set_data_contenteditable_dev),
/* harmony export */   set_data_dev: () => (/* binding */ set_data_dev),
/* harmony export */   set_data_maybe_contenteditable_dev: () => (/* binding */ set_data_maybe_contenteditable_dev),
/* harmony export */   validate_dynamic_element: () => (/* binding */ validate_dynamic_element),
/* harmony export */   validate_slots: () => (/* binding */ validate_slots),
/* harmony export */   validate_void_dynamic_element: () => (/* binding */ validate_void_dynamic_element)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/svelte/src/runtime/internal/dom.js");
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component.js */ "./node_modules/svelte/src/runtime/internal/Component.js");
/* harmony import */ var _shared_utils_names_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/names.js */ "./node_modules/svelte/src/shared/utils/names.js");
/* harmony import */ var _shared_version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/version.js */ "./node_modules/svelte/src/shared/version.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./node_modules/svelte/src/runtime/internal/utils.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./each.js */ "./node_modules/svelte/src/runtime/internal/each.js");







/**
 * @template T
 * @param {string} type
 * @param {T} [detail]
 * @returns {void}
 */
function dispatch_dev(type, detail) {
	document.dispatchEvent((0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.custom_event)(type, { version: _shared_version_js__WEBPACK_IMPORTED_MODULE_3__.VERSION, ...detail }, { bubbles: true }));
}

/**
 * @param {Node} target
 * @param {Node} node
 * @returns {void}
 */
function append_dev(target, node) {
	dispatch_dev('SvelteDOMInsert', { target, node });
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.append)(target, node);
}

/**
 * @param {Node} target
 * @param {Node} node
 * @returns {void}
 */
function append_hydration_dev(target, node) {
	dispatch_dev('SvelteDOMInsert', { target, node });
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.append_hydration)(target, node);
}

/**
 * @param {Node} target
 * @param {Node} node
 * @param {Node} [anchor]
 * @returns {void}
 */
function insert_dev(target, node, anchor) {
	dispatch_dev('SvelteDOMInsert', { target, node, anchor });
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.insert)(target, node, anchor);
}

/** @param {Node} target
 * @param {Node} node
 * @param {Node} [anchor]
 * @returns {void}
 */
function insert_hydration_dev(target, node, anchor) {
	dispatch_dev('SvelteDOMInsert', { target, node, anchor });
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.insert_hydration)(target, node, anchor);
}

/**
 * @param {Node} node
 * @returns {void}
 */
function detach_dev(node) {
	dispatch_dev('SvelteDOMRemove', { node });
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.detach)(node);
}

/**
 * @param {Node} before
 * @param {Node} after
 * @returns {void}
 */
function detach_between_dev(before, after) {
	while (before.nextSibling && before.nextSibling !== after) {
		detach_dev(before.nextSibling);
	}
}

/**
 * @param {Node} after
 * @returns {void}
 */
function detach_before_dev(after) {
	while (after.previousSibling) {
		detach_dev(after.previousSibling);
	}
}

/**
 * @param {Node} before
 * @returns {void}
 */
function detach_after_dev(before) {
	while (before.nextSibling) {
		detach_dev(before.nextSibling);
	}
}

/**
 * @param {Node} node
 * @param {string} event
 * @param {EventListenerOrEventListenerObject} handler
 * @param {boolean | AddEventListenerOptions | EventListenerOptions} [options]
 * @param {boolean} [has_prevent_default]
 * @param {boolean} [has_stop_propagation]
 * @param {boolean} [has_stop_immediate_propagation]
 * @returns {() => void}
 */
function listen_dev(
	node,
	event,
	handler,
	options,
	has_prevent_default,
	has_stop_propagation,
	has_stop_immediate_propagation
) {
	const modifiers =
		options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
	if (has_prevent_default) modifiers.push('preventDefault');
	if (has_stop_propagation) modifiers.push('stopPropagation');
	if (has_stop_immediate_propagation) modifiers.push('stopImmediatePropagation');
	dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
	const dispose = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.listen)(node, event, handler, options);
	return () => {
		dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
		dispose();
	};
}

/**
 * @param {Element} node
 * @param {string} attribute
 * @param {string} [value]
 * @returns {void}
 */
function attr_dev(node, attribute, value) {
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.attr)(node, attribute, value);
	if (value == null) dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
	else dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
}

/**
 * @param {Element} node
 * @param {string} property
 * @param {any} [value]
 * @returns {void}
 */
function prop_dev(node, property, value) {
	node[property] = value;
	dispatch_dev('SvelteDOMSetProperty', { node, property, value });
}

/**
 * @param {HTMLElement} node
 * @param {string} property
 * @param {any} [value]
 * @returns {void}
 */
function dataset_dev(node, property, value) {
	node.dataset[property] = value;
	dispatch_dev('SvelteDOMSetDataset', { node, property, value });
}

/**
 * @param {Text} text
 * @param {unknown} data
 * @returns {void}
 */
function set_data_dev(text, data) {
	data = '' + data;
	if (text.data === data) return;
	dispatch_dev('SvelteDOMSetData', { node: text, data });
	text.data = /** @type {string} */ (data);
}

/**
 * @param {Text} text
 * @param {unknown} data
 * @returns {void}
 */
function set_data_contenteditable_dev(text, data) {
	data = '' + data;
	if (text.wholeText === data) return;
	dispatch_dev('SvelteDOMSetData', { node: text, data });
	text.data = /** @type {string} */ (data);
}

/**
 * @param {Text} text
 * @param {unknown} data
 * @param {string} attr_value
 * @returns {void}
 */
function set_data_maybe_contenteditable_dev(text, data, attr_value) {
	if (~_utils_js__WEBPACK_IMPORTED_MODULE_4__.contenteditable_truthy_values.indexOf(attr_value)) {
		set_data_contenteditable_dev(text, data);
	} else {
		set_data_dev(text, data);
	}
}

function ensure_array_like_dev(arg) {
	if (
		typeof arg !== 'string' &&
		!(arg && typeof arg === 'object' && 'length' in arg) &&
		!(typeof Symbol === 'function' && arg && Symbol.iterator in arg)
	) {
		throw new Error('{#each} only works with iterable values.');
	}
	return (0,_each_js__WEBPACK_IMPORTED_MODULE_5__.ensure_array_like)(arg);
}

/**
 * @returns {void} */
function validate_slots(name, slot, keys) {
	for (const slot_key of Object.keys(slot)) {
		if (!~keys.indexOf(slot_key)) {
			console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
		}
	}
}

/**
 * @param {unknown} tag
 * @returns {void}
 */
function validate_dynamic_element(tag) {
	const is_string = typeof tag === 'string';
	if (tag && !is_string) {
		throw new Error('<svelte:element> expects "this" attribute to be a string.');
	}
}

/**
 * @param {undefined | string} tag
 * @returns {void}
 */
function validate_void_dynamic_element(tag) {
	if (tag && (0,_shared_utils_names_js__WEBPACK_IMPORTED_MODULE_2__.is_void)(tag)) {
		console.warn(`<svelte:element this="${tag}"> is self-closing and cannot have content.`);
	}
}

function construct_svelte_component_dev(component, props) {
	const error_message = 'this={...} of <svelte:component> should specify a Svelte component.';
	try {
		const instance = new component(props);
		if (!instance.$$ || !instance.$set || !instance.$on || !instance.$destroy) {
			throw new Error(error_message);
		}
		return instance;
	} catch (err) {
		const { message } = err;
		if (typeof message === 'string' && message.indexOf('is not a constructor') !== -1) {
			throw new Error(error_message);
		} else {
			throw err;
		}
	}
}

/**
 * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
 *
 * Can be used to create strongly typed Svelte components.
 *
 * #### Example:
 *
 * You have component library on npm called `component-library`, from which
 * you export a component called `MyComponent`. For Svelte+TypeScript users,
 * you want to provide typings. Therefore you create a `index.d.ts`:
 * ```ts
 * import { SvelteComponent } from "svelte";
 * export class MyComponent extends SvelteComponent<{foo: string}> {}
 * ```
 * Typing this makes it possible for IDEs like VS Code with the Svelte extension
 * to provide intellisense and to use the component like this in a Svelte file
 * with TypeScript:
 * ```svelte
 * <script lang="ts">
 * 	import { MyComponent } from "component-library";
 * </script>
 * <MyComponent foo={'bar'} />
 * ```
 * @template {Record<string, any>} [Props=any]
 * @template {Record<string, any>} [Events=any]
 * @template {Record<string, any>} [Slots=any]
 * @extends {SvelteComponent<Props, Events>}
 */
class SvelteComponentDev extends _Component_js__WEBPACK_IMPORTED_MODULE_1__.SvelteComponent {
	/**
	 * For type checking capabilities only.
	 * Does not exist at runtime.
	 * ### DO NOT USE!
	 *
	 * @type {Props}
	 */
	$$prop_def;
	/**
	 * For type checking capabilities only.
	 * Does not exist at runtime.
	 * ### DO NOT USE!
	 *
	 * @type {Events}
	 */
	$$events_def;
	/**
	 * For type checking capabilities only.
	 * Does not exist at runtime.
	 * ### DO NOT USE!
	 *
	 * @type {Slots}
	 */
	$$slot_def;

	/** @param {import('./public.js').ComponentConstructorOptions<Props>} options */
	constructor(options) {
		if (!options || (!options.target && !options.$$inline)) {
			throw new Error("'target' is a required option");
		}
		super();
	}

	/** @returns {void} */
	$destroy() {
		super.$destroy();
		this.$destroy = () => {
			console.warn('Component was already destroyed'); // eslint-disable-line no-console
		};
	}

	/** @returns {void} */
	$capture_state() {}

	/** @returns {void} */
	$inject_state() {}
}
/**
 * @template {Record<string, any>} [Props=any]
 * @template {Record<string, any>} [Events=any]
 * @template {Record<string, any>} [Slots=any]
 * @deprecated Use `SvelteComponent` instead. See PR for more information: https://github.com/sveltejs/svelte/pull/8512
 * @extends {SvelteComponentDev<Props, Events, Slots>}
 */
class SvelteComponentTyped extends SvelteComponentDev {}

/** @returns {() => void} */
function loop_guard(timeout) {
	const start = Date.now();
	return () => {
		if (Date.now() - start > timeout) {
			throw new Error('Infinite loop detected');
		}
	};
}


/***/ }),

/***/ "./node_modules/svelte/src/runtime/internal/dom.js":
/*!*********************************************************!*\
  !*** ./node_modules/svelte/src/runtime/internal/dom.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HtmlTag: () => (/* binding */ HtmlTag),
/* harmony export */   HtmlTagHydration: () => (/* binding */ HtmlTagHydration),
/* harmony export */   ResizeObserverSingleton: () => (/* reexport safe */ _ResizeObserverSingleton_js__WEBPACK_IMPORTED_MODULE_1__.ResizeObserverSingleton),
/* harmony export */   add_iframe_resize_listener: () => (/* binding */ add_iframe_resize_listener),
/* harmony export */   append: () => (/* binding */ append),
/* harmony export */   append_empty_stylesheet: () => (/* binding */ append_empty_stylesheet),
/* harmony export */   append_hydration: () => (/* binding */ append_hydration),
/* harmony export */   append_styles: () => (/* binding */ append_styles),
/* harmony export */   attr: () => (/* binding */ attr),
/* harmony export */   attribute_to_object: () => (/* binding */ attribute_to_object),
/* harmony export */   children: () => (/* binding */ children),
/* harmony export */   claim_comment: () => (/* binding */ claim_comment),
/* harmony export */   claim_element: () => (/* binding */ claim_element),
/* harmony export */   claim_html_tag: () => (/* binding */ claim_html_tag),
/* harmony export */   claim_space: () => (/* binding */ claim_space),
/* harmony export */   claim_svg_element: () => (/* binding */ claim_svg_element),
/* harmony export */   claim_text: () => (/* binding */ claim_text),
/* harmony export */   comment: () => (/* binding */ comment),
/* harmony export */   construct_svelte_component: () => (/* binding */ construct_svelte_component),
/* harmony export */   custom_event: () => (/* binding */ custom_event),
/* harmony export */   destroy_each: () => (/* binding */ destroy_each),
/* harmony export */   detach: () => (/* binding */ detach),
/* harmony export */   element: () => (/* binding */ element),
/* harmony export */   element_is: () => (/* binding */ element_is),
/* harmony export */   empty: () => (/* binding */ empty),
/* harmony export */   end_hydrating: () => (/* binding */ end_hydrating),
/* harmony export */   get_binding_group_value: () => (/* binding */ get_binding_group_value),
/* harmony export */   get_custom_elements_slots: () => (/* binding */ get_custom_elements_slots),
/* harmony export */   get_root_for_style: () => (/* binding */ get_root_for_style),
/* harmony export */   get_svelte_dataset: () => (/* binding */ get_svelte_dataset),
/* harmony export */   head_selector: () => (/* binding */ head_selector),
/* harmony export */   init_binding_group: () => (/* binding */ init_binding_group),
/* harmony export */   init_binding_group_dynamic: () => (/* binding */ init_binding_group_dynamic),
/* harmony export */   insert: () => (/* binding */ insert),
/* harmony export */   insert_hydration: () => (/* binding */ insert_hydration),
/* harmony export */   is_crossorigin: () => (/* binding */ is_crossorigin),
/* harmony export */   listen: () => (/* binding */ listen),
/* harmony export */   object_without_properties: () => (/* binding */ object_without_properties),
/* harmony export */   prevent_default: () => (/* binding */ prevent_default),
/* harmony export */   query_selector_all: () => (/* binding */ query_selector_all),
/* harmony export */   resize_observer_border_box: () => (/* binding */ resize_observer_border_box),
/* harmony export */   resize_observer_content_box: () => (/* binding */ resize_observer_content_box),
/* harmony export */   resize_observer_device_pixel_content_box: () => (/* binding */ resize_observer_device_pixel_content_box),
/* harmony export */   select_multiple_value: () => (/* binding */ select_multiple_value),
/* harmony export */   select_option: () => (/* binding */ select_option),
/* harmony export */   select_options: () => (/* binding */ select_options),
/* harmony export */   select_value: () => (/* binding */ select_value),
/* harmony export */   self: () => (/* binding */ self),
/* harmony export */   set_attributes: () => (/* binding */ set_attributes),
/* harmony export */   set_custom_element_data: () => (/* binding */ set_custom_element_data),
/* harmony export */   set_custom_element_data_map: () => (/* binding */ set_custom_element_data_map),
/* harmony export */   set_data: () => (/* binding */ set_data),
/* harmony export */   set_data_contenteditable: () => (/* binding */ set_data_contenteditable),
/* harmony export */   set_data_maybe_contenteditable: () => (/* binding */ set_data_maybe_contenteditable),
/* harmony export */   set_dynamic_element_data: () => (/* binding */ set_dynamic_element_data),
/* harmony export */   set_input_type: () => (/* binding */ set_input_type),
/* harmony export */   set_input_value: () => (/* binding */ set_input_value),
/* harmony export */   set_style: () => (/* binding */ set_style),
/* harmony export */   set_svg_attributes: () => (/* binding */ set_svg_attributes),
/* harmony export */   space: () => (/* binding */ space),
/* harmony export */   start_hydrating: () => (/* binding */ start_hydrating),
/* harmony export */   stop_immediate_propagation: () => (/* binding */ stop_immediate_propagation),
/* harmony export */   stop_propagation: () => (/* binding */ stop_propagation),
/* harmony export */   stringify_spread: () => (/* binding */ stringify_spread),
/* harmony export */   svg_element: () => (/* binding */ svg_element),
/* harmony export */   text: () => (/* binding */ text),
/* harmony export */   time_ranges_to_array: () => (/* binding */ time_ranges_to_array),
/* harmony export */   to_number: () => (/* binding */ to_number),
/* harmony export */   toggle_class: () => (/* binding */ toggle_class),
/* harmony export */   trusted: () => (/* binding */ trusted),
/* harmony export */   xlink_attr: () => (/* binding */ xlink_attr)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/svelte/src/runtime/internal/utils.js");
/* harmony import */ var _ResizeObserverSingleton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResizeObserverSingleton.js */ "./node_modules/svelte/src/runtime/internal/ResizeObserverSingleton.js");




// Track which nodes are claimed during hydration. Unclaimed nodes can then be removed from the DOM
// at the end of hydration without touching the remaining nodes.
let is_hydrating = false;

/**
 * @returns {void}
 */
function start_hydrating() {
	is_hydrating = true;
}

/**
 * @returns {void}
 */
function end_hydrating() {
	is_hydrating = false;
}

/**
 * @param {number} low
 * @param {number} high
 * @param {(index: number) => number} key
 * @param {number} value
 * @returns {number}
 */
function upper_bound(low, high, key, value) {
	// Return first index of value larger than input value in the range [low, high)
	while (low < high) {
		const mid = low + ((high - low) >> 1);
		if (key(mid) <= value) {
			low = mid + 1;
		} else {
			high = mid;
		}
	}
	return low;
}

/**
 * @param {NodeEx} target
 * @returns {void}
 */
function init_hydrate(target) {
	if (target.hydrate_init) return;
	target.hydrate_init = true;
	// We know that all children have claim_order values since the unclaimed have been detached if target is not <head>

	let children = /** @type {ArrayLike<NodeEx2>} */ (target.childNodes);
	// If target is <head>, there may be children without claim_order
	if (target.nodeName === 'HEAD') {
		const my_children = [];
		for (let i = 0; i < children.length; i++) {
			const node = children[i];
			if (node.claim_order !== undefined) {
				my_children.push(node);
			}
		}
		children = my_children;
	}
	/*
	 * Reorder claimed children optimally.
	 * We can reorder claimed children optimally by finding the longest subsequence of
	 * nodes that are already claimed in order and only moving the rest. The longest
	 * subsequence of nodes that are claimed in order can be found by
	 * computing the longest increasing subsequence of .claim_order values.
	 *
	 * This algorithm is optimal in generating the least amount of reorder operations
	 * possible.
	 *
	 * Proof:
	 * We know that, given a set of reordering operations, the nodes that do not move
	 * always form an increasing subsequence, since they do not move among each other
	 * meaning that they must be already ordered among each other. Thus, the maximal
	 * set of nodes that do not move form a longest increasing subsequence.
	 */
	// Compute longest increasing subsequence
	// m: subsequence length j => index k of smallest value that ends an increasing subsequence of length j
	const m = new Int32Array(children.length + 1);
	// Predecessor indices + 1
	const p = new Int32Array(children.length);
	m[0] = -1;
	let longest = 0;
	for (let i = 0; i < children.length; i++) {
		const current = children[i].claim_order;
		// Find the largest subsequence length such that it ends in a value less than our current value
		// upper_bound returns first greater value, so we subtract one
		// with fast path for when we are on the current longest subsequence
		const seq_len =
			(longest > 0 && children[m[longest]].claim_order <= current
				? longest + 1
				: upper_bound(1, longest, (idx) => children[m[idx]].claim_order, current)) - 1;
		p[i] = m[seq_len] + 1;
		const new_len = seq_len + 1;
		// We can guarantee that current is the smallest value. Otherwise, we would have generated a longer sequence.
		m[new_len] = i;
		longest = Math.max(new_len, longest);
	}
	// The longest increasing subsequence of nodes (initially reversed)

	/**
	 * @type {NodeEx2[]}
	 */
	const lis = [];
	// The rest of the nodes, nodes that will be moved

	/**
	 * @type {NodeEx2[]}
	 */
	const to_move = [];
	let last = children.length - 1;
	for (let cur = m[longest] + 1; cur != 0; cur = p[cur - 1]) {
		lis.push(children[cur - 1]);
		for (; last >= cur; last--) {
			to_move.push(children[last]);
		}
		last--;
	}
	for (; last >= 0; last--) {
		to_move.push(children[last]);
	}
	lis.reverse();
	// We sort the nodes being moved to guarantee that their insertion order matches the claim order
	to_move.sort((a, b) => a.claim_order - b.claim_order);
	// Finally, we move the nodes
	for (let i = 0, j = 0; i < to_move.length; i++) {
		while (j < lis.length && to_move[i].claim_order >= lis[j].claim_order) {
			j++;
		}
		const anchor = j < lis.length ? lis[j] : null;
		target.insertBefore(to_move[i], anchor);
	}
}

/**
 * @param {Node} target
 * @param {Node} node
 * @returns {void}
 */
function append(target, node) {
	target.appendChild(node);
}

/**
 * @param {Node} target
 * @param {string} style_sheet_id
 * @param {string} styles
 * @returns {void}
 */
function append_styles(target, style_sheet_id, styles) {
	const append_styles_to = get_root_for_style(target);
	if (!append_styles_to.getElementById(style_sheet_id)) {
		const style = element('style');
		style.id = style_sheet_id;
		style.textContent = styles;
		append_stylesheet(append_styles_to, style);
	}
}

/**
 * @param {Node} node
 * @returns {ShadowRoot | Document}
 */
function get_root_for_style(node) {
	if (!node) return document;
	const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
	if (root && /** @type {ShadowRoot} */ (root).host) {
		return /** @type {ShadowRoot} */ (root);
	}
	return node.ownerDocument;
}

/**
 * @param {Node} node
 * @returns {CSSStyleSheet}
 */
function append_empty_stylesheet(node) {
	const style_element = element('style');
	// For transitions to work without 'style-src: unsafe-inline' Content Security Policy,
	// these empty tags need to be allowed with a hash as a workaround until we move to the Web Animations API.
	// Using the hash for the empty string (for an empty tag) works in all browsers except Safari.
	// So as a workaround for the workaround, when we append empty style tags we set their content to /* empty */.
	// The hash 'sha256-9OlNO0DNEeaVzHL4RZwCLsBHA8WBQ8toBp/4F5XV2nc=' will then work even in Safari.
	style_element.textContent = '/* empty */';
	append_stylesheet(get_root_for_style(node), style_element);
	return style_element.sheet;
}

/**
 * @param {ShadowRoot | Document} node
 * @param {HTMLStyleElement} style
 * @returns {CSSStyleSheet}
 */
function append_stylesheet(node, style) {
	append(/** @type {Document} */ (node).head || node, style);
	return style.sheet;
}

/**
 * @param {NodeEx} target
 * @param {NodeEx} node
 * @returns {void}
 */
function append_hydration(target, node) {
	if (is_hydrating) {
		init_hydrate(target);
		if (
			target.actual_end_child === undefined ||
			(target.actual_end_child !== null && target.actual_end_child.parentNode !== target)
		) {
			target.actual_end_child = target.firstChild;
		}
		// Skip nodes of undefined ordering
		while (target.actual_end_child !== null && target.actual_end_child.claim_order === undefined) {
			target.actual_end_child = target.actual_end_child.nextSibling;
		}
		if (node !== target.actual_end_child) {
			// We only insert if the ordering of this node should be modified or the parent node is not target
			if (node.claim_order !== undefined || node.parentNode !== target) {
				target.insertBefore(node, target.actual_end_child);
			}
		} else {
			target.actual_end_child = node.nextSibling;
		}
	} else if (node.parentNode !== target || node.nextSibling !== null) {
		target.appendChild(node);
	}
}

/**
 * @param {Node} target
 * @param {Node} node
 * @param {Node} [anchor]
 * @returns {void}
 */
function insert(target, node, anchor) {
	target.insertBefore(node, anchor || null);
}

/**
 * @param {NodeEx} target
 * @param {NodeEx} node
 * @param {NodeEx} [anchor]
 * @returns {void}
 */
function insert_hydration(target, node, anchor) {
	if (is_hydrating && !anchor) {
		append_hydration(target, node);
	} else if (node.parentNode !== target || node.nextSibling != anchor) {
		target.insertBefore(node, anchor || null);
	}
}

/**
 * @param {Node} node
 * @returns {void}
 */
function detach(node) {
	if (node.parentNode) {
		node.parentNode.removeChild(node);
	}
}

/**
 * @returns {void} */
function destroy_each(iterations, detaching) {
	for (let i = 0; i < iterations.length; i += 1) {
		if (iterations[i]) iterations[i].d(detaching);
	}
}

/**
 * @template {keyof HTMLElementTagNameMap} K
 * @param {K} name
 * @returns {HTMLElementTagNameMap[K]}
 */
function element(name) {
	return document.createElement(name);
}

/**
 * @template {keyof HTMLElementTagNameMap} K
 * @param {K} name
 * @param {string} is
 * @returns {HTMLElementTagNameMap[K]}
 */
function element_is(name, is) {
	return document.createElement(name, { is });
}

/**
 * @template T
 * @template {keyof T} K
 * @param {T} obj
 * @param {K[]} exclude
 * @returns {Pick<T, Exclude<keyof T, K>>}
 */
function object_without_properties(obj, exclude) {
	const target = /** @type {Pick<T, Exclude<keyof T, K>>} */ ({});
	for (const k in obj) {
		if (
			(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.has_prop)(obj, k) &&
			// @ts-ignore
			exclude.indexOf(k) === -1
		) {
			// @ts-ignore
			target[k] = obj[k];
		}
	}
	return target;
}

/**
 * @template {keyof SVGElementTagNameMap} K
 * @param {K} name
 * @returns {SVGElement}
 */
function svg_element(name) {
	return document.createElementNS('http://www.w3.org/2000/svg', name);
}

/**
 * @param {string} data
 * @returns {Text}
 */
function text(data) {
	return document.createTextNode(data);
}

/**
 * @returns {Text} */
function space() {
	return text(' ');
}

/**
 * @returns {Text} */
function empty() {
	return text('');
}

/**
 * @param {string} content
 * @returns {Comment}
 */
function comment(content) {
	return document.createComment(content);
}

/**
 * @param {EventTarget} node
 * @param {string} event
 * @param {EventListenerOrEventListenerObject} handler
 * @param {boolean | AddEventListenerOptions | EventListenerOptions} [options]
 * @returns {() => void}
 */
function listen(node, event, handler, options) {
	node.addEventListener(event, handler, options);
	return () => node.removeEventListener(event, handler, options);
}

/**
 * @returns {(event: any) => any} */
function prevent_default(fn) {
	return function (event) {
		event.preventDefault();
		// @ts-ignore
		return fn.call(this, event);
	};
}

/**
 * @returns {(event: any) => any} */
function stop_propagation(fn) {
	return function (event) {
		event.stopPropagation();
		// @ts-ignore
		return fn.call(this, event);
	};
}

/**
 * @returns {(event: any) => any} */
function stop_immediate_propagation(fn) {
	return function (event) {
		event.stopImmediatePropagation();
		// @ts-ignore
		return fn.call(this, event);
	};
}

/**
 * @returns {(event: any) => void} */
function self(fn) {
	return function (event) {
		// @ts-ignore
		if (event.target === this) fn.call(this, event);
	};
}

/**
 * @returns {(event: any) => void} */
function trusted(fn) {
	return function (event) {
		// @ts-ignore
		if (event.isTrusted) fn.call(this, event);
	};
}

/**
 * @param {Element} node
 * @param {string} attribute
 * @param {string} [value]
 * @returns {void}
 */
function attr(node, attribute, value) {
	if (value == null) node.removeAttribute(attribute);
	else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}
/**
 * List of attributes that should always be set through the attr method,
 * because updating them through the property setter doesn't work reliably.
 * In the example of `width`/`height`, the problem is that the setter only
 * accepts numeric values, but the attribute can also be set to a string like `50%`.
 * If this list becomes too big, rethink this approach.
 */
const always_set_through_set_attribute = ['width', 'height'];

/**
 * @param {Element & ElementCSSInlineStyle} node
 * @param {{ [x: string]: string }} attributes
 * @returns {void}
 */
function set_attributes(node, attributes) {
	// @ts-ignore
	const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
	for (const key in attributes) {
		if (attributes[key] == null) {
			node.removeAttribute(key);
		} else if (key === 'style') {
			node.style.cssText = attributes[key];
		} else if (key === '__value') {
			/** @type {any} */ (node).value = node[key] = attributes[key];
		} else if (
			descriptors[key] &&
			descriptors[key].set &&
			always_set_through_set_attribute.indexOf(key) === -1
		) {
			node[key] = attributes[key];
		} else {
			attr(node, key, attributes[key]);
		}
	}
}

/**
 * @param {Element & ElementCSSInlineStyle} node
 * @param {{ [x: string]: string }} attributes
 * @returns {void}
 */
function set_svg_attributes(node, attributes) {
	for (const key in attributes) {
		attr(node, key, attributes[key]);
	}
}

/**
 * @param {Record<string, unknown>} data_map
 * @returns {void}
 */
function set_custom_element_data_map(node, data_map) {
	Object.keys(data_map).forEach((key) => {
		set_custom_element_data(node, key, data_map[key]);
	});
}

/**
 * @returns {void} */
function set_custom_element_data(node, prop, value) {
	const lower = prop.toLowerCase(); // for backwards compatibility with existing behavior we do lowercase first
	if (lower in node) {
		node[lower] = typeof node[lower] === 'boolean' && value === '' ? true : value;
	} else if (prop in node) {
		node[prop] = typeof node[prop] === 'boolean' && value === '' ? true : value;
	} else {
		attr(node, prop, value);
	}
}

/**
 * @param {string} tag
 */
function set_dynamic_element_data(tag) {
	return /-/.test(tag) ? set_custom_element_data_map : set_attributes;
}

/**
 * @returns {void}
 */
function xlink_attr(node, attribute, value) {
	node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}

/**
 * @param {HTMLElement} node
 * @returns {string}
 */
function get_svelte_dataset(node) {
	return node.dataset.svelteH;
}

/**
 * @returns {unknown[]} */
function get_binding_group_value(group, __value, checked) {
	const value = new Set();
	for (let i = 0; i < group.length; i += 1) {
		if (group[i].checked) value.add(group[i].__value);
	}
	if (!checked) {
		value.delete(__value);
	}
	return Array.from(value);
}

/**
 * @param {HTMLInputElement[]} group
 * @returns {{ p(...inputs: HTMLInputElement[]): void; r(): void; }}
 */
function init_binding_group(group) {
	/**
	 * @type {HTMLInputElement[]} */
	let _inputs;
	return {
		/* push */ p(...inputs) {
			_inputs = inputs;
			_inputs.forEach((input) => group.push(input));
		},
		/* remove */ r() {
			_inputs.forEach((input) => group.splice(group.indexOf(input), 1));
		}
	};
}

/**
 * @param {number[]} indexes
 * @returns {{ u(new_indexes: number[]): void; p(...inputs: HTMLInputElement[]): void; r: () => void; }}
 */
function init_binding_group_dynamic(group, indexes) {
	/**
	 * @type {HTMLInputElement[]} */
	let _group = get_binding_group(group);

	/**
	 * @type {HTMLInputElement[]} */
	let _inputs;

	function get_binding_group(group) {
		for (let i = 0; i < indexes.length; i++) {
			group = group[indexes[i]] = group[indexes[i]] || [];
		}
		return group;
	}

	/**
	 * @returns {void} */
	function push() {
		_inputs.forEach((input) => _group.push(input));
	}

	/**
	 * @returns {void} */
	function remove() {
		_inputs.forEach((input) => _group.splice(_group.indexOf(input), 1));
	}
	return {
		/* update */ u(new_indexes) {
			indexes = new_indexes;
			const new_group = get_binding_group(group);
			if (new_group !== _group) {
				remove();
				_group = new_group;
				push();
			}
		},
		/* push */ p(...inputs) {
			_inputs = inputs;
			push();
		},
		/* remove */ r: remove
	};
}

/** @returns {number} */
function to_number(value) {
	return value === '' ? null : +value;
}

/** @returns {any[]} */
function time_ranges_to_array(ranges) {
	const array = [];
	for (let i = 0; i < ranges.length; i += 1) {
		array.push({ start: ranges.start(i), end: ranges.end(i) });
	}
	return array;
}

/**
 * @param {Element} element
 * @returns {ChildNode[]}
 */
function children(element) {
	return Array.from(element.childNodes);
}

/**
 * @param {ChildNodeArray} nodes
 * @returns {void}
 */
function init_claim_info(nodes) {
	if (nodes.claim_info === undefined) {
		nodes.claim_info = { last_index: 0, total_claimed: 0 };
	}
}

/**
 * @template {ChildNodeEx} R
 * @param {ChildNodeArray} nodes
 * @param {(node: ChildNodeEx) => node is R} predicate
 * @param {(node: ChildNodeEx) => ChildNodeEx | undefined} process_node
 * @param {() => R} create_node
 * @param {boolean} dont_update_last_index
 * @returns {R}
 */
function claim_node(nodes, predicate, process_node, create_node, dont_update_last_index = false) {
	// Try to find nodes in an order such that we lengthen the longest increasing subsequence
	init_claim_info(nodes);
	const result_node = (() => {
		// We first try to find an element after the previous one
		for (let i = nodes.claim_info.last_index; i < nodes.length; i++) {
			const node = nodes[i];
			if (predicate(node)) {
				const replacement = process_node(node);
				if (replacement === undefined) {
					nodes.splice(i, 1);
				} else {
					nodes[i] = replacement;
				}
				if (!dont_update_last_index) {
					nodes.claim_info.last_index = i;
				}
				return node;
			}
		}
		// Otherwise, we try to find one before
		// We iterate in reverse so that we don't go too far back
		for (let i = nodes.claim_info.last_index - 1; i >= 0; i--) {
			const node = nodes[i];
			if (predicate(node)) {
				const replacement = process_node(node);
				if (replacement === undefined) {
					nodes.splice(i, 1);
				} else {
					nodes[i] = replacement;
				}
				if (!dont_update_last_index) {
					nodes.claim_info.last_index = i;
				} else if (replacement === undefined) {
					// Since we spliced before the last_index, we decrease it
					nodes.claim_info.last_index--;
				}
				return node;
			}
		}
		// If we can't find any matching node, we create a new one
		return create_node();
	})();
	result_node.claim_order = nodes.claim_info.total_claimed;
	nodes.claim_info.total_claimed += 1;
	return result_node;
}

/**
 * @param {ChildNodeArray} nodes
 * @param {string} name
 * @param {{ [key: string]: boolean }} attributes
 * @param {(name: string) => Element | SVGElement} create_element
 * @returns {Element | SVGElement}
 */
function claim_element_base(nodes, name, attributes, create_element) {
	return claim_node(
		nodes,
		/** @returns {node is Element | SVGElement} */
		(node) => node.nodeName === name,
		/** @param {Element} node */
		(node) => {
			const remove = [];
			for (let j = 0; j < node.attributes.length; j++) {
				const attribute = node.attributes[j];
				if (!attributes[attribute.name]) {
					remove.push(attribute.name);
				}
			}
			remove.forEach((v) => node.removeAttribute(v));
			return undefined;
		},
		() => create_element(name)
	);
}

/**
 * @param {ChildNodeArray} nodes
 * @param {string} name
 * @param {{ [key: string]: boolean }} attributes
 * @returns {Element | SVGElement}
 */
function claim_element(nodes, name, attributes) {
	return claim_element_base(nodes, name, attributes, element);
}

/**
 * @param {ChildNodeArray} nodes
 * @param {string} name
 * @param {{ [key: string]: boolean }} attributes
 * @returns {Element | SVGElement}
 */
function claim_svg_element(nodes, name, attributes) {
	return claim_element_base(nodes, name, attributes, svg_element);
}

/**
 * @param {ChildNodeArray} nodes
 * @returns {Text}
 */
function claim_text(nodes, data) {
	return claim_node(
		nodes,
		/** @returns {node is Text} */
		(node) => node.nodeType === 3,
		/** @param {Text} node */
		(node) => {
			const data_str = '' + data;
			if (node.data.startsWith(data_str)) {
				if (node.data.length !== data_str.length) {
					return node.splitText(data_str.length);
				}
			} else {
				node.data = data_str;
			}
		},
		() => text(data),
		true // Text nodes should not update last index since it is likely not worth it to eliminate an increasing subsequence of actual elements
	);
}

/**
 * @returns {Text} */
function claim_space(nodes) {
	return claim_text(nodes, ' ');
}

/**
 * @param {ChildNodeArray} nodes
 * @returns {Comment}
 */
function claim_comment(nodes, data) {
	return claim_node(
		nodes,
		/** @returns {node is Comment} */
		(node) => node.nodeType === 8,
		/** @param {Comment} node */
		(node) => {
			node.data = '' + data;
			return undefined;
		},
		() => comment(data),
		true
	);
}

function get_comment_idx(nodes, text, start) {
	for (let i = start; i < nodes.length; i += 1) {
		const node = nodes[i];
		if (node.nodeType === 8 /* comment node */ && node.textContent.trim() === text) {
			return i;
		}
	}
	return -1;
}

/**
 * @param {boolean} is_svg
 * @returns {HtmlTagHydration}
 */
function claim_html_tag(nodes, is_svg) {
	// find html opening tag
	const start_index = get_comment_idx(nodes, 'HTML_TAG_START', 0);
	const end_index = get_comment_idx(nodes, 'HTML_TAG_END', start_index + 1);
	if (start_index === -1 || end_index === -1) {
		return new HtmlTagHydration(is_svg);
	}

	init_claim_info(nodes);
	const html_tag_nodes = nodes.splice(start_index, end_index - start_index + 1);
	detach(html_tag_nodes[0]);
	detach(html_tag_nodes[html_tag_nodes.length - 1]);
	const claimed_nodes = html_tag_nodes.slice(1, html_tag_nodes.length - 1);
	if (claimed_nodes.length === 0) {
		return new HtmlTagHydration(is_svg);
	}
	for (const n of claimed_nodes) {
		n.claim_order = nodes.claim_info.total_claimed;
		nodes.claim_info.total_claimed += 1;
	}
	return new HtmlTagHydration(is_svg, claimed_nodes);
}

/**
 * @param {Text} text
 * @param {unknown} data
 * @returns {void}
 */
function set_data(text, data) {
	data = '' + data;
	if (text.data === data) return;
	text.data = /** @type {string} */ (data);
}

/**
 * @param {Text} text
 * @param {unknown} data
 * @returns {void}
 */
function set_data_contenteditable(text, data) {
	data = '' + data;
	if (text.wholeText === data) return;
	text.data = /** @type {string} */ (data);
}

/**
 * @param {Text} text
 * @param {unknown} data
 * @param {string} attr_value
 * @returns {void}
 */
function set_data_maybe_contenteditable(text, data, attr_value) {
	if (~_utils_js__WEBPACK_IMPORTED_MODULE_0__.contenteditable_truthy_values.indexOf(attr_value)) {
		set_data_contenteditable(text, data);
	} else {
		set_data(text, data);
	}
}

/**
 * @returns {void} */
function set_input_value(input, value) {
	input.value = value == null ? '' : value;
}

/**
 * @returns {void} */
function set_input_type(input, type) {
	try {
		input.type = type;
	} catch (e) {
		// do nothing
	}
}

/**
 * @returns {void} */
function set_style(node, key, value, important) {
	if (value == null) {
		node.style.removeProperty(key);
	} else {
		node.style.setProperty(key, value, important ? 'important' : '');
	}
}

/**
 * @returns {void} */
function select_option(select, value, mounting) {
	for (let i = 0; i < select.options.length; i += 1) {
		const option = select.options[i];
		if (option.__value === value) {
			option.selected = true;
			return;
		}
	}
	if (!mounting || value !== undefined) {
		select.selectedIndex = -1; // no option should be selected
	}
}

/**
 * @returns {void} */
function select_options(select, value) {
	for (let i = 0; i < select.options.length; i += 1) {
		const option = select.options[i];
		option.selected = ~value.indexOf(option.__value);
	}
}

function select_value(select) {
	const selected_option = select.querySelector(':checked');
	return selected_option && selected_option.__value;
}

function select_multiple_value(select) {
	return [].map.call(select.querySelectorAll(':checked'), (option) => option.__value);
}
// unfortunately this can't be a constant as that wouldn't be tree-shakeable
// so we cache the result instead

/**
 * @type {boolean} */
let crossorigin;

/**
 * @returns {boolean} */
function is_crossorigin() {
	if (crossorigin === undefined) {
		crossorigin = false;
		try {
			if (typeof window !== 'undefined' && window.parent) {
				void window.parent.document;
			}
		} catch (error) {
			crossorigin = true;
		}
	}
	return crossorigin;
}

/**
 * @param {HTMLElement} node
 * @param {() => void} fn
 * @returns {() => void}
 */
function add_iframe_resize_listener(node, fn) {
	const computed_style = getComputedStyle(node);
	if (computed_style.position === 'static') {
		node.style.position = 'relative';
	}
	const iframe = element('iframe');
	iframe.setAttribute(
		'style',
		'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; ' +
			'overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;'
	);
	iframe.setAttribute('aria-hidden', 'true');
	iframe.tabIndex = -1;
	const crossorigin = is_crossorigin();

	/**
	 * @type {() => void}
	 */
	let unsubscribe;
	if (crossorigin) {
		iframe.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>";
		unsubscribe = listen(
			window,
			'message',
			/** @param {MessageEvent} event */ (event) => {
				if (event.source === iframe.contentWindow) fn();
			}
		);
	} else {
		iframe.src = 'about:blank';
		iframe.onload = () => {
			unsubscribe = listen(iframe.contentWindow, 'resize', fn);
			// make sure an initial resize event is fired _after_ the iframe is loaded (which is asynchronous)
			// see https://github.com/sveltejs/svelte/issues/4233
			fn();
		};
	}
	append(node, iframe);
	return () => {
		if (crossorigin) {
			unsubscribe();
		} else if (unsubscribe && iframe.contentWindow) {
			unsubscribe();
		}
		detach(iframe);
	};
}
const resize_observer_content_box = /* @__PURE__ */ new _ResizeObserverSingleton_js__WEBPACK_IMPORTED_MODULE_1__.ResizeObserverSingleton({
	box: 'content-box'
});
const resize_observer_border_box = /* @__PURE__ */ new _ResizeObserverSingleton_js__WEBPACK_IMPORTED_MODULE_1__.ResizeObserverSingleton({
	box: 'border-box'
});
const resize_observer_device_pixel_content_box = /* @__PURE__ */ new _ResizeObserverSingleton_js__WEBPACK_IMPORTED_MODULE_1__.ResizeObserverSingleton(
	{ box: 'device-pixel-content-box' }
);


/**
 * @returns {void} */
function toggle_class(element, name, toggle) {
	// The `!!` is required because an `undefined` flag means flipping the current state.
	element.classList.toggle(name, !!toggle);
}

/**
 * @template T
 * @param {string} type
 * @param {T} [detail]
 * @param {{ bubbles?: boolean, cancelable?: boolean }} [options]
 * @returns {CustomEvent<T>}
 */
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
	return new CustomEvent(type, { detail, bubbles, cancelable });
}

/**
 * @param {string} selector
 * @param {HTMLElement} parent
 * @returns {ChildNodeArray}
 */
function query_selector_all(selector, parent = document.body) {
	return Array.from(parent.querySelectorAll(selector));
}

/**
 * @param {string} nodeId
 * @param {HTMLElement} head
 * @returns {any[]}
 */
function head_selector(nodeId, head) {
	const result = [];
	let started = 0;
	for (const node of head.childNodes) {
		if (node.nodeType === 8 /* comment node */) {
			const comment = node.textContent.trim();
			if (comment === `HEAD_${nodeId}_END`) {
				started -= 1;
				result.push(node);
			} else if (comment === `HEAD_${nodeId}_START`) {
				started += 1;
				result.push(node);
			}
		} else if (started > 0) {
			result.push(node);
		}
	}
	return result;
}
/** */
class HtmlTag {
	/**
	 * @private
	 * @default false
	 */
	is_svg = false;
	/** parent for creating node */
	e = undefined;
	/** html tag nodes */
	n = undefined;
	/** target */
	t = undefined;
	/** anchor */
	a = undefined;
	constructor(is_svg = false) {
		this.is_svg = is_svg;
		this.e = this.n = null;
	}

	/**
	 * @param {string} html
	 * @returns {void}
	 */
	c(html) {
		this.h(html);
	}

	/**
	 * @param {string} html
	 * @param {HTMLElement | SVGElement} target
	 * @param {HTMLElement | SVGElement} anchor
	 * @returns {void}
	 */
	m(html, target, anchor = null) {
		if (!this.e) {
			if (this.is_svg)
				this.e = svg_element(/** @type {keyof SVGElementTagNameMap} */ (target.nodeName));
			/** #7364  target for <template> may be provided as #document-fragment(11) */ else
				this.e = element(
					/** @type {keyof HTMLElementTagNameMap} */ (
						target.nodeType === 11 ? 'TEMPLATE' : target.nodeName
					)
				);
			this.t =
				target.tagName !== 'TEMPLATE'
					? target
					: /** @type {HTMLTemplateElement} */ (target).content;
			this.c(html);
		}
		this.i(anchor);
	}

	/**
	 * @param {string} html
	 * @returns {void}
	 */
	h(html) {
		this.e.innerHTML = html;
		this.n = Array.from(
			this.e.nodeName === 'TEMPLATE' ? this.e.content.childNodes : this.e.childNodes
		);
	}

	/**
	 * @returns {void} */
	i(anchor) {
		for (let i = 0; i < this.n.length; i += 1) {
			insert(this.t, this.n[i], anchor);
		}
	}

	/**
	 * @param {string} html
	 * @returns {void}
	 */
	p(html) {
		this.d();
		this.h(html);
		this.i(this.a);
	}

	/**
	 * @returns {void} */
	d() {
		this.n.forEach(detach);
	}
}

class HtmlTagHydration extends HtmlTag {
	/** @type {Element[]} hydration claimed nodes */
	l = undefined;

	constructor(is_svg = false, claimed_nodes) {
		super(is_svg);
		this.e = this.n = null;
		this.l = claimed_nodes;
	}

	/**
	 * @param {string} html
	 * @returns {void}
	 */
	c(html) {
		if (this.l) {
			this.n = this.l;
		} else {
			super.c(html);
		}
	}

	/**
	 * @returns {void} */
	i(anchor) {
		for (let i = 0; i < this.n.length; i += 1) {
			insert_hydration(this.t, this.n[i], anchor);
		}
	}
}

/**
 * @param {NamedNodeMap} attributes
 * @returns {{}}
 */
function attribute_to_object(attributes) {
	const result = {};
	for (const attribute of attributes) {
		result[attribute.name] = attribute.value;
	}
	return result;
}

const escaped = {
	'"': '&quot;',
	'&': '&amp;',
	'<': '&lt;'
};

const regex_attribute_characters_to_escape = /["&<]/g;

/**
 * Note that the attribute itself should be surrounded in double quotes
 * @param {any} attribute
 */
function escape_attribute(attribute) {
	return String(attribute).replace(regex_attribute_characters_to_escape, (match) => escaped[match]);
}

/**
 * @param {Record<string, string>} attributes
 */
function stringify_spread(attributes) {
	let str = ' ';
	for (const key in attributes) {
		if (attributes[key] != null) {
			str += `${key}="${escape_attribute(attributes[key])}" `;
		}
	}

	return str;
}

/**
 * @param {HTMLElement} element
 * @returns {{}}
 */
function get_custom_elements_slots(element) {
	const result = {};
	element.childNodes.forEach(
		/** @param {Element} node */ (node) => {
			result[node.slot || 'default'] = true;
		}
	);
	return result;
}

function construct_svelte_component(component, props) {
	return new component(props);
}

/**
 * @typedef {Node & {
 * 	claim_order?: number;
 * 	hydrate_init?: true;
 * 	actual_end_child?: NodeEx;
 * 	childNodes: NodeListOf<NodeEx>;
 * }} NodeEx
 */

/** @typedef {ChildNode & NodeEx} ChildNodeEx */

/** @typedef {NodeEx & { claim_order: number }} NodeEx2 */

/**
 * @typedef {ChildNodeEx[] & {
 * 	claim_info?: {
 * 		last_index: number;
 * 		total_claimed: number;
 * 	};
 * }} ChildNodeArray
 */


/***/ }),

/***/ "./node_modules/svelte/src/runtime/internal/each.js":
/*!**********************************************************!*\
  !*** ./node_modules/svelte/src/runtime/internal/each.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   destroy_block: () => (/* binding */ destroy_block),
/* harmony export */   ensure_array_like: () => (/* binding */ ensure_array_like),
/* harmony export */   fix_and_destroy_block: () => (/* binding */ fix_and_destroy_block),
/* harmony export */   fix_and_outro_and_destroy_block: () => (/* binding */ fix_and_outro_and_destroy_block),
/* harmony export */   outro_and_destroy_block: () => (/* binding */ outro_and_destroy_block),
/* harmony export */   update_keyed_each: () => (/* binding */ update_keyed_each),
/* harmony export */   validate_each_keys: () => (/* binding */ validate_each_keys)
/* harmony export */ });
/* harmony import */ var _transitions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transitions.js */ "./node_modules/svelte/src/runtime/internal/transitions.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/svelte/src/runtime/internal/utils.js");



// general each functions:

function ensure_array_like(array_like_or_iterator) {
	return array_like_or_iterator?.length !== undefined
		? array_like_or_iterator
		: Array.from(array_like_or_iterator);
}

// keyed each functions:

/** @returns {void} */
function destroy_block(block, lookup) {
	block.d(1);
	lookup.delete(block.key);
}

/** @returns {void} */
function outro_and_destroy_block(block, lookup) {
	(0,_transitions_js__WEBPACK_IMPORTED_MODULE_0__.transition_out)(block, 1, 1, () => {
		lookup.delete(block.key);
	});
}

/** @returns {void} */
function fix_and_destroy_block(block, lookup) {
	block.f();
	destroy_block(block, lookup);
}

/** @returns {void} */
function fix_and_outro_and_destroy_block(block, lookup) {
	block.f();
	outro_and_destroy_block(block, lookup);
}

/** @returns {any[]} */
function update_keyed_each(
	old_blocks,
	dirty,
	get_key,
	dynamic,
	ctx,
	list,
	lookup,
	node,
	destroy,
	create_each_block,
	next,
	get_context
) {
	let o = old_blocks.length;
	let n = list.length;
	let i = o;
	const old_indexes = {};
	while (i--) old_indexes[old_blocks[i].key] = i;
	const new_blocks = [];
	const new_lookup = new Map();
	const deltas = new Map();
	const updates = [];
	i = n;
	while (i--) {
		const child_ctx = get_context(ctx, list, i);
		const key = get_key(child_ctx);
		let block = lookup.get(key);
		if (!block) {
			block = create_each_block(key, child_ctx);
			block.c();
		} else if (dynamic) {
			// defer updates until all the DOM shuffling is done
			updates.push(() => block.p(child_ctx, dirty));
		}
		new_lookup.set(key, (new_blocks[i] = block));
		if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
	}
	const will_move = new Set();
	const did_move = new Set();
	/** @returns {void} */
	function insert(block) {
		(0,_transitions_js__WEBPACK_IMPORTED_MODULE_0__.transition_in)(block, 1);
		block.m(node, next);
		lookup.set(block.key, block);
		next = block.first;
		n--;
	}
	while (o && n) {
		const new_block = new_blocks[n - 1];
		const old_block = old_blocks[o - 1];
		const new_key = new_block.key;
		const old_key = old_block.key;
		if (new_block === old_block) {
			// do nothing
			next = new_block.first;
			o--;
			n--;
		} else if (!new_lookup.has(old_key)) {
			// remove old block
			destroy(old_block, lookup);
			o--;
		} else if (!lookup.has(new_key) || will_move.has(new_key)) {
			insert(new_block);
		} else if (did_move.has(old_key)) {
			o--;
		} else if (deltas.get(new_key) > deltas.get(old_key)) {
			did_move.add(new_key);
			insert(new_block);
		} else {
			will_move.add(old_key);
			o--;
		}
	}
	while (o--) {
		const old_block = old_blocks[o];
		if (!new_lookup.has(old_block.key)) destroy(old_block, lookup);
	}
	while (n) insert(new_blocks[n - 1]);
	(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.run_all)(updates);
	return new_blocks;
}

/** @returns {void} */
function validate_each_keys(ctx, list, get_context, get_key) {
	const keys = new Map();
	for (let i = 0; i < list.length; i++) {
		const key = get_key(get_context(ctx, list, i));
		if (keys.has(key)) {
			let value = '';
			try {
				value = `with value '${String(key)}' `;
			} catch (e) {
				// can't stringify
			}
			throw new Error(
				`Cannot have duplicate keys in a keyed each: Keys at index ${keys.get(
					key
				)} and ${i} ${value}are duplicates`
			);
		}
		keys.set(key, i);
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/runtime/internal/environment.js":
/*!*****************************************************************!*\
  !*** ./node_modules/svelte/src/runtime/internal/environment.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   is_client: () => (/* binding */ is_client),
/* harmony export */   now: () => (/* binding */ now),
/* harmony export */   raf: () => (/* binding */ raf),
/* harmony export */   set_now: () => (/* binding */ set_now),
/* harmony export */   set_raf: () => (/* binding */ set_raf)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/svelte/src/runtime/internal/utils.js");


const is_client = typeof window !== 'undefined';

/** @type {() => number} */
let now = is_client ? () => window.performance.now() : () => Date.now();

let raf = is_client ? (cb) => requestAnimationFrame(cb) : _utils_js__WEBPACK_IMPORTED_MODULE_0__.noop;

// used internally for testing
/** @returns {void} */
function set_now(fn) {
	now = fn;
}

/** @returns {void} */
function set_raf(fn) {
	raf = fn;
}


/***/ }),

/***/ "./node_modules/svelte/src/runtime/internal/globals.js":
/*!*************************************************************!*\
  !*** ./node_modules/svelte/src/runtime/internal/globals.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   globals: () => (/* binding */ globals)
/* harmony export */ });
/** @type {typeof globalThis} */
const globals =
	typeof window !== 'undefined'
		? window
		: typeof globalThis !== 'undefined'
		? globalThis
		: // @ts-ignore Node typings have this
		  global;


/***/ }),

/***/ "./node_modules/svelte/src/runtime/internal/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/svelte/src/runtime/internal/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HtmlTag: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.HtmlTag),
/* harmony export */   HtmlTagHydration: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.HtmlTagHydration),
/* harmony export */   ResizeObserverSingleton: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.ResizeObserverSingleton),
/* harmony export */   SvelteComponent: () => (/* reexport safe */ _Component_js__WEBPACK_IMPORTED_MODULE_13__.SvelteComponent),
/* harmony export */   SvelteComponentDev: () => (/* reexport safe */ _dev_js__WEBPACK_IMPORTED_MODULE_14__.SvelteComponentDev),
/* harmony export */   SvelteComponentTyped: () => (/* reexport safe */ _dev_js__WEBPACK_IMPORTED_MODULE_14__.SvelteComponentTyped),
/* harmony export */   SvelteElement: () => (/* reexport safe */ _Component_js__WEBPACK_IMPORTED_MODULE_13__.SvelteElement),
/* harmony export */   action_destroyer: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.action_destroyer),
/* harmony export */   add_attribute: () => (/* reexport safe */ _ssr_js__WEBPACK_IMPORTED_MODULE_10__.add_attribute),
/* harmony export */   add_classes: () => (/* reexport safe */ _ssr_js__WEBPACK_IMPORTED_MODULE_10__.add_classes),
/* harmony export */   add_flush_callback: () => (/* reexport safe */ _scheduler_js__WEBPACK_IMPORTED_MODULE_8__.add_flush_callback),
/* harmony export */   add_iframe_resize_listener: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.add_iframe_resize_listener),
/* harmony export */   add_location: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.add_location),
/* harmony export */   add_render_callback: () => (/* reexport safe */ _scheduler_js__WEBPACK_IMPORTED_MODULE_8__.add_render_callback),
/* harmony export */   add_styles: () => (/* reexport safe */ _ssr_js__WEBPACK_IMPORTED_MODULE_10__.add_styles),
/* harmony export */   add_transform: () => (/* reexport safe */ _animations_js__WEBPACK_IMPORTED_MODULE_0__.add_transform),
/* harmony export */   afterUpdate: () => (/* reexport safe */ _lifecycle_js__WEBPACK_IMPORTED_MODULE_6__.afterUpdate),
/* harmony export */   append: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.append),
/* harmony export */   append_dev: () => (/* reexport safe */ _dev_js__WEBPACK_IMPORTED_MODULE_14__.append_dev),
/* harmony export */   append_empty_stylesheet: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.append_empty_stylesheet),
/* harmony export */   append_hydration: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.append_hydration),
/* harmony export */   append_hydration_dev: () => (/* reexport safe */ _dev_js__WEBPACK_IMPORTED_MODULE_14__.append_hydration_dev),
/* harmony export */   append_styles: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.append_styles),
/* harmony export */   assign: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.assign),
/* harmony export */   attr: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.attr),
/* harmony export */   attr_dev: () => (/* reexport safe */ _dev_js__WEBPACK_IMPORTED_MODULE_14__.attr_dev),
/* harmony export */   attribute_to_object: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.attribute_to_object),
/* harmony export */   beforeUpdate: () => (/* reexport safe */ _lifecycle_js__WEBPACK_IMPORTED_MODULE_6__.beforeUpdate),
/* harmony export */   bind: () => (/* reexport safe */ _Component_js__WEBPACK_IMPORTED_MODULE_13__.bind),
/* harmony export */   binding_callbacks: () => (/* reexport safe */ _scheduler_js__WEBPACK_IMPORTED_MODULE_8__.binding_callbacks),
/* harmony export */   blank_object: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.blank_object),
/* harmony export */   bubble: () => (/* reexport safe */ _lifecycle_js__WEBPACK_IMPORTED_MODULE_6__.bubble),
/* harmony export */   check_outros: () => (/* reexport safe */ _transitions_js__WEBPACK_IMPORTED_MODULE_11__.check_outros),
/* harmony export */   children: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.children),
/* harmony export */   claim_comment: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.claim_comment),
/* harmony export */   claim_component: () => (/* reexport safe */ _Component_js__WEBPACK_IMPORTED_MODULE_13__.claim_component),
/* harmony export */   claim_element: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.claim_element),
/* harmony export */   claim_html_tag: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.claim_html_tag),
/* harmony export */   claim_space: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.claim_space),
/* harmony export */   claim_svg_element: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.claim_svg_element),
/* harmony export */   claim_text: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.claim_text),
/* harmony export */   clear_loops: () => (/* reexport safe */ _loop_js__WEBPACK_IMPORTED_MODULE_7__.clear_loops),
/* harmony export */   comment: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.comment),
/* harmony export */   component_subscribe: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.component_subscribe),
/* harmony export */   compute_rest_props: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.compute_rest_props),
/* harmony export */   compute_slots: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.compute_slots),
/* harmony export */   construct_svelte_component: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.construct_svelte_component),
/* harmony export */   construct_svelte_component_dev: () => (/* reexport safe */ _dev_js__WEBPACK_IMPORTED_MODULE_14__.construct_svelte_component_dev),
/* harmony export */   contenteditable_truthy_values: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.contenteditable_truthy_values),
/* harmony export */   createEventDispatcher: () => (/* reexport safe */ _lifecycle_js__WEBPACK_IMPORTED_MODULE_6__.createEventDispatcher),
/* harmony export */   create_animation: () => (/* reexport safe */ _animations_js__WEBPACK_IMPORTED_MODULE_0__.create_animation),
/* harmony export */   create_bidirectional_transition: () => (/* reexport safe */ _transitions_js__WEBPACK_IMPORTED_MODULE_11__.create_bidirectional_transition),
/* harmony export */   create_component: () => (/* reexport safe */ _Component_js__WEBPACK_IMPORTED_MODULE_13__.create_component),
/* harmony export */   create_custom_element: () => (/* reexport safe */ _Component_js__WEBPACK_IMPORTED_MODULE_13__.create_custom_element),
/* harmony export */   create_in_transition: () => (/* reexport safe */ _transitions_js__WEBPACK_IMPORTED_MODULE_11__.create_in_transition),
/* harmony export */   create_out_transition: () => (/* reexport safe */ _transitions_js__WEBPACK_IMPORTED_MODULE_11__.create_out_transition),
/* harmony export */   create_slot: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.create_slot),
/* harmony export */   create_ssr_component: () => (/* reexport safe */ _ssr_js__WEBPACK_IMPORTED_MODULE_10__.create_ssr_component),
/* harmony export */   current_component: () => (/* reexport safe */ _lifecycle_js__WEBPACK_IMPORTED_MODULE_6__.current_component),
/* harmony export */   custom_event: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.custom_event),
/* harmony export */   dataset_dev: () => (/* reexport safe */ _dev_js__WEBPACK_IMPORTED_MODULE_14__.dataset_dev),
/* harmony export */   debug: () => (/* reexport safe */ _ssr_js__WEBPACK_IMPORTED_MODULE_10__.debug),
/* harmony export */   destroy_block: () => (/* reexport safe */ _each_js__WEBPACK_IMPORTED_MODULE_5__.destroy_block),
/* harmony export */   destroy_component: () => (/* reexport safe */ _Component_js__WEBPACK_IMPORTED_MODULE_13__.destroy_component),
/* harmony export */   destroy_each: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.destroy_each),
/* harmony export */   detach: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.detach),
/* harmony export */   detach_after_dev: () => (/* reexport safe */ _dev_js__WEBPACK_IMPORTED_MODULE_14__.detach_after_dev),
/* harmony export */   detach_before_dev: () => (/* reexport safe */ _dev_js__WEBPACK_IMPORTED_MODULE_14__.detach_before_dev),
/* harmony export */   detach_between_dev: () => (/* reexport safe */ _dev_js__WEBPACK_IMPORTED_MODULE_14__.detach_between_dev),
/* harmony export */   detach_dev: () => (/* reexport safe */ _dev_js__WEBPACK_IMPORTED_MODULE_14__.detach_dev),
/* harmony export */   dirty_components: () => (/* reexport safe */ _scheduler_js__WEBPACK_IMPORTED_MODULE_8__.dirty_components),
/* harmony export */   dispatch_dev: () => (/* reexport safe */ _dev_js__WEBPACK_IMPORTED_MODULE_14__.dispatch_dev),
/* harmony export */   each: () => (/* reexport safe */ _ssr_js__WEBPACK_IMPORTED_MODULE_10__.each),
/* harmony export */   element: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.element),
/* harmony export */   element_is: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.element_is),
/* harmony export */   empty: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.empty),
/* harmony export */   end_hydrating: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.end_hydrating),
/* harmony export */   ensure_array_like: () => (/* reexport safe */ _each_js__WEBPACK_IMPORTED_MODULE_5__.ensure_array_like),
/* harmony export */   ensure_array_like_dev: () => (/* reexport safe */ _dev_js__WEBPACK_IMPORTED_MODULE_14__.ensure_array_like_dev),
/* harmony export */   escape: () => (/* reexport safe */ _ssr_js__WEBPACK_IMPORTED_MODULE_10__.escape),
/* harmony export */   escape_attribute_value: () => (/* reexport safe */ _ssr_js__WEBPACK_IMPORTED_MODULE_10__.escape_attribute_value),
/* harmony export */   escape_object: () => (/* reexport safe */ _ssr_js__WEBPACK_IMPORTED_MODULE_10__.escape_object),
/* harmony export */   exclude_internal_props: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.exclude_internal_props),
/* harmony export */   fix_and_destroy_block: () => (/* reexport safe */ _each_js__WEBPACK_IMPORTED_MODULE_5__.fix_and_destroy_block),
/* harmony export */   fix_and_outro_and_destroy_block: () => (/* reexport safe */ _each_js__WEBPACK_IMPORTED_MODULE_5__.fix_and_outro_and_destroy_block),
/* harmony export */   fix_position: () => (/* reexport safe */ _animations_js__WEBPACK_IMPORTED_MODULE_0__.fix_position),
/* harmony export */   flush: () => (/* reexport safe */ _scheduler_js__WEBPACK_IMPORTED_MODULE_8__.flush),
/* harmony export */   flush_render_callbacks: () => (/* reexport safe */ _scheduler_js__WEBPACK_IMPORTED_MODULE_8__.flush_render_callbacks),
/* harmony export */   getAllContexts: () => (/* reexport safe */ _lifecycle_js__WEBPACK_IMPORTED_MODULE_6__.getAllContexts),
/* harmony export */   getContext: () => (/* reexport safe */ _lifecycle_js__WEBPACK_IMPORTED_MODULE_6__.getContext),
/* harmony export */   get_all_dirty_from_scope: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.get_all_dirty_from_scope),
/* harmony export */   get_binding_group_value: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.get_binding_group_value),
/* harmony export */   get_current_component: () => (/* reexport safe */ _lifecycle_js__WEBPACK_IMPORTED_MODULE_6__.get_current_component),
/* harmony export */   get_custom_elements_slots: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.get_custom_elements_slots),
/* harmony export */   get_root_for_style: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.get_root_for_style),
/* harmony export */   get_slot_changes: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.get_slot_changes),
/* harmony export */   get_spread_object: () => (/* reexport safe */ _spread_js__WEBPACK_IMPORTED_MODULE_9__.get_spread_object),
/* harmony export */   get_spread_update: () => (/* reexport safe */ _spread_js__WEBPACK_IMPORTED_MODULE_9__.get_spread_update),
/* harmony export */   get_store_value: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.get_store_value),
/* harmony export */   get_svelte_dataset: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.get_svelte_dataset),
/* harmony export */   globals: () => (/* reexport safe */ _globals_js__WEBPACK_IMPORTED_MODULE_4__.globals),
/* harmony export */   group_outros: () => (/* reexport safe */ _transitions_js__WEBPACK_IMPORTED_MODULE_11__.group_outros),
/* harmony export */   handle_promise: () => (/* reexport safe */ _await_block_js__WEBPACK_IMPORTED_MODULE_1__.handle_promise),
/* harmony export */   hasContext: () => (/* reexport safe */ _lifecycle_js__WEBPACK_IMPORTED_MODULE_6__.hasContext),
/* harmony export */   has_prop: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.has_prop),
/* harmony export */   head_selector: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.head_selector),
/* harmony export */   identity: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.identity),
/* harmony export */   init: () => (/* reexport safe */ _Component_js__WEBPACK_IMPORTED_MODULE_13__.init),
/* harmony export */   init_binding_group: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.init_binding_group),
/* harmony export */   init_binding_group_dynamic: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.init_binding_group_dynamic),
/* harmony export */   insert: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.insert),
/* harmony export */   insert_dev: () => (/* reexport safe */ _dev_js__WEBPACK_IMPORTED_MODULE_14__.insert_dev),
/* harmony export */   insert_hydration: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.insert_hydration),
/* harmony export */   insert_hydration_dev: () => (/* reexport safe */ _dev_js__WEBPACK_IMPORTED_MODULE_14__.insert_hydration_dev),
/* harmony export */   intros: () => (/* reexport safe */ _scheduler_js__WEBPACK_IMPORTED_MODULE_8__.intros),
/* harmony export */   invalid_attribute_name_character: () => (/* reexport safe */ _ssr_js__WEBPACK_IMPORTED_MODULE_10__.invalid_attribute_name_character),
/* harmony export */   is_client: () => (/* reexport safe */ _environment_js__WEBPACK_IMPORTED_MODULE_3__.is_client),
/* harmony export */   is_crossorigin: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.is_crossorigin),
/* harmony export */   is_empty: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.is_empty),
/* harmony export */   is_function: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.is_function),
/* harmony export */   is_promise: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.is_promise),
/* harmony export */   is_void: () => (/* reexport safe */ _ssr_js__WEBPACK_IMPORTED_MODULE_10__.is_void),
/* harmony export */   listen: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.listen),
/* harmony export */   listen_dev: () => (/* reexport safe */ _dev_js__WEBPACK_IMPORTED_MODULE_14__.listen_dev),
/* harmony export */   loop: () => (/* reexport safe */ _loop_js__WEBPACK_IMPORTED_MODULE_7__.loop),
/* harmony export */   loop_guard: () => (/* reexport safe */ _dev_js__WEBPACK_IMPORTED_MODULE_14__.loop_guard),
/* harmony export */   merge_ssr_styles: () => (/* reexport safe */ _ssr_js__WEBPACK_IMPORTED_MODULE_10__.merge_ssr_styles),
/* harmony export */   missing_component: () => (/* reexport safe */ _ssr_js__WEBPACK_IMPORTED_MODULE_10__.missing_component),
/* harmony export */   mount_component: () => (/* reexport safe */ _Component_js__WEBPACK_IMPORTED_MODULE_13__.mount_component),
/* harmony export */   noop: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.noop),
/* harmony export */   not_equal: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.not_equal),
/* harmony export */   now: () => (/* reexport safe */ _environment_js__WEBPACK_IMPORTED_MODULE_3__.now),
/* harmony export */   null_to_empty: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.null_to_empty),
/* harmony export */   object_without_properties: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.object_without_properties),
/* harmony export */   onDestroy: () => (/* reexport safe */ _lifecycle_js__WEBPACK_IMPORTED_MODULE_6__.onDestroy),
/* harmony export */   onMount: () => (/* reexport safe */ _lifecycle_js__WEBPACK_IMPORTED_MODULE_6__.onMount),
/* harmony export */   once: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.once),
/* harmony export */   outro_and_destroy_block: () => (/* reexport safe */ _each_js__WEBPACK_IMPORTED_MODULE_5__.outro_and_destroy_block),
/* harmony export */   prevent_default: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.prevent_default),
/* harmony export */   prop_dev: () => (/* reexport safe */ _dev_js__WEBPACK_IMPORTED_MODULE_14__.prop_dev),
/* harmony export */   query_selector_all: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.query_selector_all),
/* harmony export */   raf: () => (/* reexport safe */ _environment_js__WEBPACK_IMPORTED_MODULE_3__.raf),
/* harmony export */   resize_observer_border_box: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.resize_observer_border_box),
/* harmony export */   resize_observer_content_box: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.resize_observer_content_box),
/* harmony export */   resize_observer_device_pixel_content_box: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.resize_observer_device_pixel_content_box),
/* harmony export */   run: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.run),
/* harmony export */   run_all: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.run_all),
/* harmony export */   safe_not_equal: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.safe_not_equal),
/* harmony export */   schedule_update: () => (/* reexport safe */ _scheduler_js__WEBPACK_IMPORTED_MODULE_8__.schedule_update),
/* harmony export */   select_multiple_value: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.select_multiple_value),
/* harmony export */   select_option: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.select_option),
/* harmony export */   select_options: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.select_options),
/* harmony export */   select_value: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.select_value),
/* harmony export */   self: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.self),
/* harmony export */   setContext: () => (/* reexport safe */ _lifecycle_js__WEBPACK_IMPORTED_MODULE_6__.setContext),
/* harmony export */   set_attributes: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.set_attributes),
/* harmony export */   set_current_component: () => (/* reexport safe */ _lifecycle_js__WEBPACK_IMPORTED_MODULE_6__.set_current_component),
/* harmony export */   set_custom_element_data: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.set_custom_element_data),
/* harmony export */   set_custom_element_data_map: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.set_custom_element_data_map),
/* harmony export */   set_data: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.set_data),
/* harmony export */   set_data_contenteditable: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.set_data_contenteditable),
/* harmony export */   set_data_contenteditable_dev: () => (/* reexport safe */ _dev_js__WEBPACK_IMPORTED_MODULE_14__.set_data_contenteditable_dev),
/* harmony export */   set_data_dev: () => (/* reexport safe */ _dev_js__WEBPACK_IMPORTED_MODULE_14__.set_data_dev),
/* harmony export */   set_data_maybe_contenteditable: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.set_data_maybe_contenteditable),
/* harmony export */   set_data_maybe_contenteditable_dev: () => (/* reexport safe */ _dev_js__WEBPACK_IMPORTED_MODULE_14__.set_data_maybe_contenteditable_dev),
/* harmony export */   set_dynamic_element_data: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.set_dynamic_element_data),
/* harmony export */   set_input_type: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.set_input_type),
/* harmony export */   set_input_value: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.set_input_value),
/* harmony export */   set_now: () => (/* reexport safe */ _environment_js__WEBPACK_IMPORTED_MODULE_3__.set_now),
/* harmony export */   set_raf: () => (/* reexport safe */ _environment_js__WEBPACK_IMPORTED_MODULE_3__.set_raf),
/* harmony export */   set_store_value: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.set_store_value),
/* harmony export */   set_style: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.set_style),
/* harmony export */   set_svg_attributes: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.set_svg_attributes),
/* harmony export */   space: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.space),
/* harmony export */   split_css_unit: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.split_css_unit),
/* harmony export */   spread: () => (/* reexport safe */ _ssr_js__WEBPACK_IMPORTED_MODULE_10__.spread),
/* harmony export */   src_url_equal: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.src_url_equal),
/* harmony export */   srcset_url_equal: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.srcset_url_equal),
/* harmony export */   start_hydrating: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.start_hydrating),
/* harmony export */   stop_immediate_propagation: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.stop_immediate_propagation),
/* harmony export */   stop_propagation: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.stop_propagation),
/* harmony export */   stringify_spread: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.stringify_spread),
/* harmony export */   subscribe: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.subscribe),
/* harmony export */   svg_element: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.svg_element),
/* harmony export */   text: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.text),
/* harmony export */   tick: () => (/* reexport safe */ _scheduler_js__WEBPACK_IMPORTED_MODULE_8__.tick),
/* harmony export */   time_ranges_to_array: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.time_ranges_to_array),
/* harmony export */   to_number: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.to_number),
/* harmony export */   toggle_class: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.toggle_class),
/* harmony export */   transition_in: () => (/* reexport safe */ _transitions_js__WEBPACK_IMPORTED_MODULE_11__.transition_in),
/* harmony export */   transition_out: () => (/* reexport safe */ _transitions_js__WEBPACK_IMPORTED_MODULE_11__.transition_out),
/* harmony export */   trusted: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.trusted),
/* harmony export */   update_await_block_branch: () => (/* reexport safe */ _await_block_js__WEBPACK_IMPORTED_MODULE_1__.update_await_block_branch),
/* harmony export */   update_keyed_each: () => (/* reexport safe */ _each_js__WEBPACK_IMPORTED_MODULE_5__.update_keyed_each),
/* harmony export */   update_slot: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.update_slot),
/* harmony export */   update_slot_base: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.update_slot_base),
/* harmony export */   validate_component: () => (/* reexport safe */ _ssr_js__WEBPACK_IMPORTED_MODULE_10__.validate_component),
/* harmony export */   validate_dynamic_element: () => (/* reexport safe */ _dev_js__WEBPACK_IMPORTED_MODULE_14__.validate_dynamic_element),
/* harmony export */   validate_each_keys: () => (/* reexport safe */ _each_js__WEBPACK_IMPORTED_MODULE_5__.validate_each_keys),
/* harmony export */   validate_slots: () => (/* reexport safe */ _dev_js__WEBPACK_IMPORTED_MODULE_14__.validate_slots),
/* harmony export */   validate_store: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_12__.validate_store),
/* harmony export */   validate_void_dynamic_element: () => (/* reexport safe */ _dev_js__WEBPACK_IMPORTED_MODULE_14__.validate_void_dynamic_element),
/* harmony export */   xlink_attr: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.xlink_attr)
/* harmony export */ });
/* harmony import */ var _animations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations.js */ "./node_modules/svelte/src/runtime/internal/animations.js");
/* harmony import */ var _await_block_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./await_block.js */ "./node_modules/svelte/src/runtime/internal/await_block.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./node_modules/svelte/src/runtime/internal/dom.js");
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environment.js */ "./node_modules/svelte/src/runtime/internal/environment.js");
/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./globals.js */ "./node_modules/svelte/src/runtime/internal/globals.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./each.js */ "./node_modules/svelte/src/runtime/internal/each.js");
/* harmony import */ var _lifecycle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lifecycle.js */ "./node_modules/svelte/src/runtime/internal/lifecycle.js");
/* harmony import */ var _loop_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loop.js */ "./node_modules/svelte/src/runtime/internal/loop.js");
/* harmony import */ var _scheduler_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scheduler.js */ "./node_modules/svelte/src/runtime/internal/scheduler.js");
/* harmony import */ var _spread_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./spread.js */ "./node_modules/svelte/src/runtime/internal/spread.js");
/* harmony import */ var _ssr_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ssr.js */ "./node_modules/svelte/src/runtime/internal/ssr.js");
/* harmony import */ var _transitions_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transitions.js */ "./node_modules/svelte/src/runtime/internal/transitions.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils.js */ "./node_modules/svelte/src/runtime/internal/utils.js");
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Component.js */ "./node_modules/svelte/src/runtime/internal/Component.js");
/* harmony import */ var _dev_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dev.js */ "./node_modules/svelte/src/runtime/internal/dev.js");

















/***/ }),

/***/ "./node_modules/svelte/src/runtime/internal/lifecycle.js":
/*!***************************************************************!*\
  !*** ./node_modules/svelte/src/runtime/internal/lifecycle.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   afterUpdate: () => (/* binding */ afterUpdate),
/* harmony export */   beforeUpdate: () => (/* binding */ beforeUpdate),
/* harmony export */   bubble: () => (/* binding */ bubble),
/* harmony export */   createEventDispatcher: () => (/* binding */ createEventDispatcher),
/* harmony export */   current_component: () => (/* binding */ current_component),
/* harmony export */   getAllContexts: () => (/* binding */ getAllContexts),
/* harmony export */   getContext: () => (/* binding */ getContext),
/* harmony export */   get_current_component: () => (/* binding */ get_current_component),
/* harmony export */   hasContext: () => (/* binding */ hasContext),
/* harmony export */   onDestroy: () => (/* binding */ onDestroy),
/* harmony export */   onMount: () => (/* binding */ onMount),
/* harmony export */   setContext: () => (/* binding */ setContext),
/* harmony export */   set_current_component: () => (/* binding */ set_current_component)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/svelte/src/runtime/internal/dom.js");


let current_component;

/** @returns {void} */
function set_current_component(component) {
	current_component = component;
}

function get_current_component() {
	if (!current_component) throw new Error('Function called outside component initialization');
	return current_component;
}

/**
 * Schedules a callback to run immediately before the component is updated after any state change.
 *
 * The first time the callback runs will be before the initial `onMount`
 *
 * https://svelte.dev/docs/svelte#beforeupdate
 * @param {() => any} fn
 * @returns {void}
 */
function beforeUpdate(fn) {
	get_current_component().$$.before_update.push(fn);
}

/**
 * The `onMount` function schedules a callback to run as soon as the component has been mounted to the DOM.
 * It must be called during the component's initialisation (but doesn't need to live *inside* the component;
 * it can be called from an external module).
 *
 * If a function is returned _synchronously_ from `onMount`, it will be called when the component is unmounted.
 *
 * `onMount` does not run inside a [server-side component](https://svelte.dev/docs#run-time-server-side-component-api).
 *
 * https://svelte.dev/docs/svelte#onmount
 * @template T
 * @param {() => import('./private.js').NotFunction<T> | Promise<import('./private.js').NotFunction<T>> | (() => any)} fn
 * @returns {void}
 */
function onMount(fn) {
	get_current_component().$$.on_mount.push(fn);
}

/**
 * Schedules a callback to run immediately after the component has been updated.
 *
 * The first time the callback runs will be after the initial `onMount`
 *
 * https://svelte.dev/docs/svelte#afterupdate
 * @param {() => any} fn
 * @returns {void}
 */
function afterUpdate(fn) {
	get_current_component().$$.after_update.push(fn);
}

/**
 * Schedules a callback to run immediately before the component is unmounted.
 *
 * Out of `onMount`, `beforeUpdate`, `afterUpdate` and `onDestroy`, this is the
 * only one that runs inside a server-side component.
 *
 * https://svelte.dev/docs/svelte#ondestroy
 * @param {() => any} fn
 * @returns {void}
 */
function onDestroy(fn) {
	get_current_component().$$.on_destroy.push(fn);
}

/**
 * Creates an event dispatcher that can be used to dispatch [component events](https://svelte.dev/docs#template-syntax-component-directives-on-eventname).
 * Event dispatchers are functions that can take two arguments: `name` and `detail`.
 *
 * Component events created with `createEventDispatcher` create a
 * [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent).
 * These events do not [bubble](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture).
 * The `detail` argument corresponds to the [CustomEvent.detail](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail)
 * property and can contain any type of data.
 *
 * The event dispatcher can be typed to narrow the allowed event names and the type of the `detail` argument:
 * ```ts
 * const dispatch = createEventDispatcher<{
 *  loaded: never; // does not take a detail argument
 *  change: string; // takes a detail argument of type string, which is required
 *  optional: number | null; // takes an optional detail argument of type number
 * }>();
 * ```
 *
 * https://svelte.dev/docs/svelte#createeventdispatcher
 * @template {Record<string, any>} [EventMap=any]
 * @returns {import('./public.js').EventDispatcher<EventMap>}
 */
function createEventDispatcher() {
	const component = get_current_component();
	return (type, detail, { cancelable = false } = {}) => {
		const callbacks = component.$$.callbacks[type];
		if (callbacks) {
			// TODO are there situations where events could be dispatched
			// in a server (non-DOM) environment?
			const event = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.custom_event)(/** @type {string} */ (type), detail, { cancelable });
			callbacks.slice().forEach((fn) => {
				fn.call(component, event);
			});
			return !event.defaultPrevented;
		}
		return true;
	};
}

/**
 * Associates an arbitrary `context` object with the current component and the specified `key`
 * and returns that object. The context is then available to children of the component
 * (including slotted content) with `getContext`.
 *
 * Like lifecycle functions, this must be called during component initialisation.
 *
 * https://svelte.dev/docs/svelte#setcontext
 * @template T
 * @param {any} key
 * @param {T} context
 * @returns {T}
 */
function setContext(key, context) {
	get_current_component().$$.context.set(key, context);
	return context;
}

/**
 * Retrieves the context that belongs to the closest parent component with the specified `key`.
 * Must be called during component initialisation.
 *
 * https://svelte.dev/docs/svelte#getcontext
 * @template T
 * @param {any} key
 * @returns {T}
 */
function getContext(key) {
	return get_current_component().$$.context.get(key);
}

/**
 * Retrieves the whole context map that belongs to the closest parent component.
 * Must be called during component initialisation. Useful, for example, if you
 * programmatically create a component and want to pass the existing context to it.
 *
 * https://svelte.dev/docs/svelte#getallcontexts
 * @template {Map<any, any>} [T=Map<any, any>]
 * @returns {T}
 */
function getAllContexts() {
	return get_current_component().$$.context;
}

/**
 * Checks whether a given `key` has been set in the context of a parent component.
 * Must be called during component initialisation.
 *
 * https://svelte.dev/docs/svelte#hascontext
 * @param {any} key
 * @returns {boolean}
 */
function hasContext(key) {
	return get_current_component().$$.context.has(key);
}

// TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism
/**
 * @param component
 * @param event
 * @returns {void}
 */
function bubble(component, event) {
	const callbacks = component.$$.callbacks[event.type];
	if (callbacks) {
		// @ts-ignore
		callbacks.slice().forEach((fn) => fn.call(this, event));
	}
}


/***/ }),

/***/ "./node_modules/svelte/src/runtime/internal/loop.js":
/*!**********************************************************!*\
  !*** ./node_modules/svelte/src/runtime/internal/loop.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clear_loops: () => (/* binding */ clear_loops),
/* harmony export */   loop: () => (/* binding */ loop)
/* harmony export */ });
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment.js */ "./node_modules/svelte/src/runtime/internal/environment.js");


const tasks = new Set();

/**
 * @param {number} now
 * @returns {void}
 */
function run_tasks(now) {
	tasks.forEach((task) => {
		if (!task.c(now)) {
			tasks.delete(task);
			task.f();
		}
	});
	if (tasks.size !== 0) (0,_environment_js__WEBPACK_IMPORTED_MODULE_0__.raf)(run_tasks);
}

/**
 * For testing purposes only!
 * @returns {void}
 */
function clear_loops() {
	tasks.clear();
}

/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 * @param {import('./private.js').TaskCallback} callback
 * @returns {import('./private.js').Task}
 */
function loop(callback) {
	/** @type {import('./private.js').TaskEntry} */
	let task;
	if (tasks.size === 0) (0,_environment_js__WEBPACK_IMPORTED_MODULE_0__.raf)(run_tasks);
	return {
		promise: new Promise((fulfill) => {
			tasks.add((task = { c: callback, f: fulfill }));
		}),
		abort() {
			tasks.delete(task);
		}
	};
}


/***/ }),

/***/ "./node_modules/svelte/src/runtime/internal/scheduler.js":
/*!***************************************************************!*\
  !*** ./node_modules/svelte/src/runtime/internal/scheduler.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add_flush_callback: () => (/* binding */ add_flush_callback),
/* harmony export */   add_render_callback: () => (/* binding */ add_render_callback),
/* harmony export */   binding_callbacks: () => (/* binding */ binding_callbacks),
/* harmony export */   dirty_components: () => (/* binding */ dirty_components),
/* harmony export */   flush: () => (/* binding */ flush),
/* harmony export */   flush_render_callbacks: () => (/* binding */ flush_render_callbacks),
/* harmony export */   intros: () => (/* binding */ intros),
/* harmony export */   schedule_update: () => (/* binding */ schedule_update),
/* harmony export */   tick: () => (/* binding */ tick)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/svelte/src/runtime/internal/utils.js");
/* harmony import */ var _lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lifecycle.js */ "./node_modules/svelte/src/runtime/internal/lifecycle.js");



const dirty_components = [];
const intros = { enabled: false };
const binding_callbacks = [];

let render_callbacks = [];

const flush_callbacks = [];

const resolved_promise = /* @__PURE__ */ Promise.resolve();

let update_scheduled = false;

/** @returns {void} */
function schedule_update() {
	if (!update_scheduled) {
		update_scheduled = true;
		resolved_promise.then(flush);
	}
}

/** @returns {Promise<void>} */
function tick() {
	schedule_update();
	return resolved_promise;
}

/** @returns {void} */
function add_render_callback(fn) {
	render_callbacks.push(fn);
}

/** @returns {void} */
function add_flush_callback(fn) {
	flush_callbacks.push(fn);
}

// flush() calls callbacks in this order:
// 1. All beforeUpdate callbacks, in order: parents before children
// 2. All bind:this callbacks, in reverse order: children before parents.
// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
//    for afterUpdates called during the initial onMount, which are called in
//    reverse order: children before parents.
// Since callbacks might update component values, which could trigger another
// call to flush(), the following steps guard against this:
// 1. During beforeUpdate, any updated components will be added to the
//    dirty_components array and will cause a reentrant call to flush(). Because
//    the flush index is kept outside the function, the reentrant call will pick
//    up where the earlier call left off and go through all dirty components. The
//    current_component value is saved and restored so that the reentrant call will
//    not interfere with the "parent" flush() call.
// 2. bind:this callbacks cannot trigger new flush() calls.
// 3. During afterUpdate, any updated components will NOT have their afterUpdate
//    callback called a second time; the seen_callbacks set, outside the flush()
//    function, guarantees this behavior.
const seen_callbacks = new Set();

let flushidx = 0; // Do *not* move this inside the flush() function

/** @returns {void} */
function flush() {
	// Do not reenter flush while dirty components are updated, as this can
	// result in an infinite loop. Instead, let the inner flush handle it.
	// Reentrancy is ok afterwards for bindings etc.
	if (flushidx !== 0) {
		return;
	}
	const saved_component = _lifecycle_js__WEBPACK_IMPORTED_MODULE_1__.current_component;
	do {
		// first, call beforeUpdate functions
		// and update components
		try {
			while (flushidx < dirty_components.length) {
				const component = dirty_components[flushidx];
				flushidx++;
				(0,_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__.set_current_component)(component);
				update(component.$$);
			}
		} catch (e) {
			// reset dirty state to not end up in a deadlocked state and then rethrow
			dirty_components.length = 0;
			flushidx = 0;
			throw e;
		}
		(0,_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__.set_current_component)(null);
		dirty_components.length = 0;
		flushidx = 0;
		while (binding_callbacks.length) binding_callbacks.pop()();
		// then, once components are updated, call
		// afterUpdate functions. This may cause
		// subsequent updates...
		for (let i = 0; i < render_callbacks.length; i += 1) {
			const callback = render_callbacks[i];
			if (!seen_callbacks.has(callback)) {
				// ...so guard against infinite loops
				seen_callbacks.add(callback);
				callback();
			}
		}
		render_callbacks.length = 0;
	} while (dirty_components.length);
	while (flush_callbacks.length) {
		flush_callbacks.pop()();
	}
	update_scheduled = false;
	seen_callbacks.clear();
	(0,_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__.set_current_component)(saved_component);
}

/** @returns {void} */
function update($$) {
	if ($$.fragment !== null) {
		$$.update();
		(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.run_all)($$.before_update);
		const dirty = $$.dirty;
		$$.dirty = [-1];
		$$.fragment && $$.fragment.p($$.ctx, dirty);
		$$.after_update.forEach(add_render_callback);
	}
}

/**
 * Useful for example to execute remaining `afterUpdate` callbacks before executing `destroy`.
 * @param {Function[]} fns
 * @returns {void}
 */
function flush_render_callbacks(fns) {
	const filtered = [];
	const targets = [];
	render_callbacks.forEach((c) => (fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c)));
	targets.forEach((c) => c());
	render_callbacks = filtered;
}


/***/ }),

/***/ "./node_modules/svelte/src/runtime/internal/spread.js":
/*!************************************************************!*\
  !*** ./node_modules/svelte/src/runtime/internal/spread.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   get_spread_object: () => (/* binding */ get_spread_object),
/* harmony export */   get_spread_update: () => (/* binding */ get_spread_update)
/* harmony export */ });
/** @returns {{}} */
function get_spread_update(levels, updates) {
	const update = {};
	const to_null_out = {};
	const accounted_for = { $$scope: 1 };
	let i = levels.length;
	while (i--) {
		const o = levels[i];
		const n = updates[i];
		if (n) {
			for (const key in o) {
				if (!(key in n)) to_null_out[key] = 1;
			}
			for (const key in n) {
				if (!accounted_for[key]) {
					update[key] = n[key];
					accounted_for[key] = 1;
				}
			}
			levels[i] = n;
		} else {
			for (const key in o) {
				accounted_for[key] = 1;
			}
		}
	}
	for (const key in to_null_out) {
		if (!(key in update)) update[key] = undefined;
	}
	return update;
}

function get_spread_object(spread_props) {
	return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
}


/***/ }),

/***/ "./node_modules/svelte/src/runtime/internal/ssr.js":
/*!*********************************************************!*\
  !*** ./node_modules/svelte/src/runtime/internal/ssr.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add_attribute: () => (/* binding */ add_attribute),
/* harmony export */   add_classes: () => (/* binding */ add_classes),
/* harmony export */   add_styles: () => (/* binding */ add_styles),
/* harmony export */   create_ssr_component: () => (/* binding */ create_ssr_component),
/* harmony export */   debug: () => (/* binding */ debug),
/* harmony export */   each: () => (/* binding */ each),
/* harmony export */   escape: () => (/* binding */ escape),
/* harmony export */   escape_attribute_value: () => (/* binding */ escape_attribute_value),
/* harmony export */   escape_object: () => (/* binding */ escape_object),
/* harmony export */   invalid_attribute_name_character: () => (/* binding */ invalid_attribute_name_character),
/* harmony export */   is_void: () => (/* reexport safe */ _shared_utils_names_js__WEBPACK_IMPORTED_MODULE_4__.is_void),
/* harmony export */   merge_ssr_styles: () => (/* binding */ merge_ssr_styles),
/* harmony export */   missing_component: () => (/* binding */ missing_component),
/* harmony export */   spread: () => (/* binding */ spread),
/* harmony export */   validate_component: () => (/* binding */ validate_component)
/* harmony export */ });
/* harmony import */ var _lifecycle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lifecycle.js */ "./node_modules/svelte/src/runtime/internal/lifecycle.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/svelte/src/runtime/internal/utils.js");
/* harmony import */ var _shared_boolean_attributes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/boolean_attributes.js */ "./node_modules/svelte/src/shared/boolean_attributes.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./each.js */ "./node_modules/svelte/src/runtime/internal/each.js");
/* harmony import */ var _shared_utils_names_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/utils/names.js */ "./node_modules/svelte/src/shared/utils/names.js");






const invalid_attribute_name_character =
	/[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter

/** @returns {string} */
function spread(args, attrs_to_add) {
	const attributes = Object.assign({}, ...args);
	if (attrs_to_add) {
		const classes_to_add = attrs_to_add.classes;
		const styles_to_add = attrs_to_add.styles;
		if (classes_to_add) {
			if (attributes.class == null) {
				attributes.class = classes_to_add;
			} else {
				attributes.class += ' ' + classes_to_add;
			}
		}
		if (styles_to_add) {
			if (attributes.style == null) {
				attributes.style = style_object_to_string(styles_to_add);
			} else {
				attributes.style = style_object_to_string(
					merge_ssr_styles(attributes.style, styles_to_add)
				);
			}
		}
	}
	let str = '';
	Object.keys(attributes).forEach((name) => {
		if (invalid_attribute_name_character.test(name)) return;
		const value = attributes[name];
		if (value === true) str += ' ' + name;
		else if (_shared_boolean_attributes_js__WEBPACK_IMPORTED_MODULE_2__.boolean_attributes.has(name.toLowerCase())) {
			if (value) str += ' ' + name;
		} else if (value != null) {
			str += ` ${name}="${value}"`;
		}
	});
	return str;
}

/** @returns {{}} */
function merge_ssr_styles(style_attribute, style_directive) {
	const style_object = {};
	for (const individual_style of style_attribute.split(';')) {
		const colon_index = individual_style.indexOf(':');
		const name = individual_style.slice(0, colon_index).trim();
		const value = individual_style.slice(colon_index + 1).trim();
		if (!name) continue;
		style_object[name] = value;
	}
	for (const name in style_directive) {
		const value = style_directive[name];
		if (value) {
			style_object[name] = value;
		} else {
			delete style_object[name];
		}
	}
	return style_object;
}

const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;

/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 * @param {unknown} value
 * @returns {string}
 */
function escape(value, is_attr = false) {
	const str = String(value);
	const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
	pattern.lastIndex = 0;
	let escaped = '';
	let last = 0;
	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}
	return escaped + str.substring(last);
}

function escape_attribute_value(value) {
	// keep booleans, null, and undefined for the sake of `spread`
	const should_escape = typeof value === 'string' || (value && typeof value === 'object');
	return should_escape ? escape(value, true) : value;
}

/** @returns {{}} */
function escape_object(obj) {
	const result = {};
	for (const key in obj) {
		result[key] = escape_attribute_value(obj[key]);
	}
	return result;
}

/** @returns {string} */
function each(items, fn) {
	items = (0,_each_js__WEBPACK_IMPORTED_MODULE_3__.ensure_array_like)(items);
	let str = '';
	for (let i = 0; i < items.length; i += 1) {
		str += fn(items[i], i);
	}
	return str;
}

const missing_component = {
	$$render: () => ''
};

function validate_component(component, name) {
	if (!component || !component.$$render) {
		if (name === 'svelte:component') name += ' this={...}';
		throw new Error(
			`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`
		);
	}
	return component;
}

/** @returns {string} */
function debug(file, line, column, values) {
	console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`); // eslint-disable-line no-console
	console.log(values); // eslint-disable-line no-console
	return '';
}

let on_destroy;

/** @returns {{ render: (props?: {}, { $$slots, context }?: { $$slots?: {}; context?: Map<any, any>; }) => { html: any; css: { code: string; map: any; }; head: string; }; $$render: (result: any, props: any, bindings: any, slots: any, context: any) => any; }} */
function create_ssr_component(fn) {
	function $$render(result, props, bindings, slots, context) {
		const parent_component = _lifecycle_js__WEBPACK_IMPORTED_MODULE_0__.current_component;
		const $$ = {
			on_destroy,
			context: new Map(context || (parent_component ? parent_component.$$.context : [])),
			// these will be immediately discarded
			on_mount: [],
			before_update: [],
			after_update: [],
			callbacks: (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.blank_object)()
		};
		(0,_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__.set_current_component)({ $$ });
		const html = fn(result, props, bindings, slots);
		(0,_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__.set_current_component)(parent_component);
		return html;
	}
	return {
		render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
			on_destroy = [];
			const result = { title: '', head: '', css: new Set() };
			const html = $$render(result, props, {}, $$slots, context);
			(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.run_all)(on_destroy);
			return {
				html,
				css: {
					code: Array.from(result.css)
						.map((css) => css.code)
						.join('\n'),
					map: null // TODO
				},
				head: result.title + result.head
			};
		},
		$$render
	};
}

/** @returns {string} */
function add_attribute(name, value, boolean) {
	if (value == null || (boolean && !value)) return '';
	const assignment = boolean && value === true ? '' : `="${escape(value, true)}"`;
	return ` ${name}${assignment}`;
}

/** @returns {string} */
function add_classes(classes) {
	return classes ? ` class="${classes}"` : '';
}

/** @returns {string} */
function style_object_to_string(style_object) {
	return Object.keys(style_object)
		.filter((key) => style_object[key] != null && style_object[key] !== '')
		.map((key) => `${key}: ${escape_attribute_value(style_object[key])};`)
		.join(' ');
}

/** @returns {string} */
function add_styles(style_object) {
	const styles = style_object_to_string(style_object);
	return styles ? ` style="${styles}"` : '';
}


/***/ }),

/***/ "./node_modules/svelte/src/runtime/internal/style_manager.js":
/*!*******************************************************************!*\
  !*** ./node_modules/svelte/src/runtime/internal/style_manager.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clear_rules: () => (/* binding */ clear_rules),
/* harmony export */   create_rule: () => (/* binding */ create_rule),
/* harmony export */   delete_rule: () => (/* binding */ delete_rule)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/svelte/src/runtime/internal/dom.js");
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment.js */ "./node_modules/svelte/src/runtime/internal/environment.js");



// we need to store the information for multiple documents because a Svelte application could also contain iframes
// https://github.com/sveltejs/svelte/issues/3624
/** @type {Map<Document | ShadowRoot, import('./private.d.ts').StyleInformation>} */
const managed_styles = new Map();

let active = 0;

// https://github.com/darkskyapp/string-hash/blob/master/index.js
/**
 * @param {string} str
 * @returns {number}
 */
function hash(str) {
	let hash = 5381;
	let i = str.length;
	while (i--) hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
	return hash >>> 0;
}

/**
 * @param {Document | ShadowRoot} doc
 * @param {Element & ElementCSSInlineStyle} node
 * @returns {{ stylesheet: any; rules: {}; }}
 */
function create_style_information(doc, node) {
	const info = { stylesheet: (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.append_empty_stylesheet)(node), rules: {} };
	managed_styles.set(doc, info);
	return info;
}

/**
 * @param {Element & ElementCSSInlineStyle} node
 * @param {number} a
 * @param {number} b
 * @param {number} duration
 * @param {number} delay
 * @param {(t: number) => number} ease
 * @param {(t: number, u: number) => string} fn
 * @param {number} uid
 * @returns {string}
 */
function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
	const step = 16.666 / duration;
	let keyframes = '{\n';
	for (let p = 0; p <= 1; p += step) {
		const t = a + (b - a) * ease(p);
		keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
	}
	const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
	const name = `__svelte_${hash(rule)}_${uid}`;
	const doc = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.get_root_for_style)(node);
	const { stylesheet, rules } = managed_styles.get(doc) || create_style_information(doc, node);
	if (!rules[name]) {
		rules[name] = true;
		stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
	}
	const animation = node.style.animation || '';
	node.style.animation = `${
		animation ? `${animation}, ` : ''
	}${name} ${duration}ms linear ${delay}ms 1 both`;
	active += 1;
	return name;
}

/**
 * @param {Element & ElementCSSInlineStyle} node
 * @param {string} [name]
 * @returns {void}
 */
function delete_rule(node, name) {
	const previous = (node.style.animation || '').split(', ');
	const next = previous.filter(
		name
			? (anim) => anim.indexOf(name) < 0 // remove specific animation
			: (anim) => anim.indexOf('__svelte') === -1 // remove all Svelte animations
	);
	const deleted = previous.length - next.length;
	if (deleted) {
		node.style.animation = next.join(', ');
		active -= deleted;
		if (!active) clear_rules();
	}
}

/** @returns {void} */
function clear_rules() {
	(0,_environment_js__WEBPACK_IMPORTED_MODULE_1__.raf)(() => {
		if (active) return;
		managed_styles.forEach((info) => {
			const { ownerNode } = info.stylesheet;
			// there is no ownerNode if it runs on jsdom.
			if (ownerNode) (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.detach)(ownerNode);
		});
		managed_styles.clear();
	});
}


/***/ }),

/***/ "./node_modules/svelte/src/runtime/internal/transitions.js":
/*!*****************************************************************!*\
  !*** ./node_modules/svelte/src/runtime/internal/transitions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   check_outros: () => (/* binding */ check_outros),
/* harmony export */   create_bidirectional_transition: () => (/* binding */ create_bidirectional_transition),
/* harmony export */   create_in_transition: () => (/* binding */ create_in_transition),
/* harmony export */   create_out_transition: () => (/* binding */ create_out_transition),
/* harmony export */   group_outros: () => (/* binding */ group_outros),
/* harmony export */   transition_in: () => (/* binding */ transition_in),
/* harmony export */   transition_out: () => (/* binding */ transition_out)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/svelte/src/runtime/internal/utils.js");
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment.js */ "./node_modules/svelte/src/runtime/internal/environment.js");
/* harmony import */ var _loop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loop.js */ "./node_modules/svelte/src/runtime/internal/loop.js");
/* harmony import */ var _style_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style_manager.js */ "./node_modules/svelte/src/runtime/internal/style_manager.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom.js */ "./node_modules/svelte/src/runtime/internal/dom.js");
/* harmony import */ var _scheduler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scheduler.js */ "./node_modules/svelte/src/runtime/internal/scheduler.js");







/**
 * @type {Promise<void> | null}
 */
let promise;

/**
 * @returns {Promise<void>}
 */
function wait() {
	if (!promise) {
		promise = Promise.resolve();
		promise.then(() => {
			promise = null;
		});
	}
	return promise;
}

/**
 * @param {Element} node
 * @param {INTRO | OUTRO | boolean} direction
 * @param {'start' | 'end'} kind
 * @returns {void}
 */
function dispatch(node, direction, kind) {
	node.dispatchEvent((0,_dom_js__WEBPACK_IMPORTED_MODULE_4__.custom_event)(`${direction ? 'intro' : 'outro'}${kind}`));
}

const outroing = new Set();

/**
 * @type {Outro}
 */
let outros;

/**
 * @returns {void} */
function group_outros() {
	outros = {
		r: 0,
		c: [],
		p: outros // parent group
	};
}

/**
 * @returns {void} */
function check_outros() {
	if (!outros.r) {
		(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.run_all)(outros.c);
	}
	outros = outros.p;
}

/**
 * @param {import('./private.js').Fragment} block
 * @param {0 | 1} [local]
 * @returns {void}
 */
function transition_in(block, local) {
	if (block && block.i) {
		outroing.delete(block);
		block.i(local);
	}
}

/**
 * @param {import('./private.js').Fragment} block
 * @param {0 | 1} local
 * @param {0 | 1} [detach]
 * @param {() => void} [callback]
 * @returns {void}
 */
function transition_out(block, local, detach, callback) {
	if (block && block.o) {
		if (outroing.has(block)) return;
		outroing.add(block);
		outros.c.push(() => {
			outroing.delete(block);
			if (callback) {
				if (detach) block.d(1);
				callback();
			}
		});
		block.o(local);
	} else if (callback) {
		callback();
	}
}

/**
 * @type {import('../transition/public.js').TransitionConfig}
 */
const null_transition = { duration: 0 };

/**
 * @param {Element & ElementCSSInlineStyle} node
 * @param {TransitionFn} fn
 * @param {any} params
 * @returns {{ start(): void; invalidate(): void; end(): void; }}
 */
function create_in_transition(node, fn, params) {
	/**
	 * @type {TransitionOptions} */
	const options = { direction: 'in' };
	let config = fn(node, params, options);
	let running = false;
	let animation_name;
	let task;
	let uid = 0;

	/**
	 * @returns {void} */
	function cleanup() {
		if (animation_name) (0,_style_manager_js__WEBPACK_IMPORTED_MODULE_3__.delete_rule)(node, animation_name);
	}

	/**
	 * @returns {void} */
	function go() {
		const {
			delay = 0,
			duration = 300,
			easing = _utils_js__WEBPACK_IMPORTED_MODULE_0__.identity,
			tick = _utils_js__WEBPACK_IMPORTED_MODULE_0__.noop,
			css
		} = config || null_transition;
		if (css) animation_name = (0,_style_manager_js__WEBPACK_IMPORTED_MODULE_3__.create_rule)(node, 0, 1, duration, delay, easing, css, uid++);
		tick(0, 1);
		const start_time = (0,_environment_js__WEBPACK_IMPORTED_MODULE_1__.now)() + delay;
		const end_time = start_time + duration;
		if (task) task.abort();
		running = true;
		(0,_scheduler_js__WEBPACK_IMPORTED_MODULE_5__.add_render_callback)(() => dispatch(node, true, 'start'));
		task = (0,_loop_js__WEBPACK_IMPORTED_MODULE_2__.loop)((now) => {
			if (running) {
				if (now >= end_time) {
					tick(1, 0);
					dispatch(node, true, 'end');
					cleanup();
					return (running = false);
				}
				if (now >= start_time) {
					const t = easing((now - start_time) / duration);
					tick(t, 1 - t);
				}
			}
			return running;
		});
	}
	let started = false;
	return {
		start() {
			if (started) return;
			started = true;
			(0,_style_manager_js__WEBPACK_IMPORTED_MODULE_3__.delete_rule)(node);
			if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.is_function)(config)) {
				config = config(options);
				wait().then(go);
			} else {
				go();
			}
		},
		invalidate() {
			started = false;
		},
		end() {
			if (running) {
				cleanup();
				running = false;
			}
		}
	};
}

/**
 * @param {Element & ElementCSSInlineStyle} node
 * @param {TransitionFn} fn
 * @param {any} params
 * @returns {{ end(reset: any): void; }}
 */
function create_out_transition(node, fn, params) {
	/** @type {TransitionOptions} */
	const options = { direction: 'out' };
	let config = fn(node, params, options);
	let running = true;
	let animation_name;
	const group = outros;
	group.r += 1;
	/** @type {boolean} */
	let original_inert_value;

	/**
	 * @returns {void} */
	function go() {
		const {
			delay = 0,
			duration = 300,
			easing = _utils_js__WEBPACK_IMPORTED_MODULE_0__.identity,
			tick = _utils_js__WEBPACK_IMPORTED_MODULE_0__.noop,
			css
		} = config || null_transition;

		if (css) animation_name = (0,_style_manager_js__WEBPACK_IMPORTED_MODULE_3__.create_rule)(node, 1, 0, duration, delay, easing, css);

		const start_time = (0,_environment_js__WEBPACK_IMPORTED_MODULE_1__.now)() + delay;
		const end_time = start_time + duration;
		(0,_scheduler_js__WEBPACK_IMPORTED_MODULE_5__.add_render_callback)(() => dispatch(node, false, 'start'));

		if ('inert' in node) {
			original_inert_value = /** @type {HTMLElement} */ (node).inert;
			node.inert = true;
		}

		(0,_loop_js__WEBPACK_IMPORTED_MODULE_2__.loop)((now) => {
			if (running) {
				if (now >= end_time) {
					tick(0, 1);
					dispatch(node, false, 'end');
					if (!--group.r) {
						// this will result in `end()` being called,
						// so we don't need to clean up here
						(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.run_all)(group.c);
					}
					return false;
				}
				if (now >= start_time) {
					const t = easing((now - start_time) / duration);
					tick(1 - t, t);
				}
			}
			return running;
		});
	}

	if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.is_function)(config)) {
		wait().then(() => {
			// @ts-ignore
			config = config(options);
			go();
		});
	} else {
		go();
	}

	return {
		end(reset) {
			if (reset && 'inert' in node) {
				node.inert = original_inert_value;
			}
			if (reset && config.tick) {
				config.tick(1, 0);
			}
			if (running) {
				if (animation_name) (0,_style_manager_js__WEBPACK_IMPORTED_MODULE_3__.delete_rule)(node, animation_name);
				running = false;
			}
		}
	};
}

/**
 * @param {Element & ElementCSSInlineStyle} node
 * @param {TransitionFn} fn
 * @param {any} params
 * @param {boolean} intro
 * @returns {{ run(b: 0 | 1): void; end(): void; }}
 */
function create_bidirectional_transition(node, fn, params, intro) {
	/**
	 * @type {TransitionOptions} */
	const options = { direction: 'both' };
	let config = fn(node, params, options);
	let t = intro ? 0 : 1;

	/**
	 * @type {Program | null} */
	let running_program = null;

	/**
	 * @type {PendingProgram | null} */
	let pending_program = null;
	let animation_name = null;

	/** @type {boolean} */
	let original_inert_value;

	/**
	 * @returns {void} */
	function clear_animation() {
		if (animation_name) (0,_style_manager_js__WEBPACK_IMPORTED_MODULE_3__.delete_rule)(node, animation_name);
	}

	/**
	 * @param {PendingProgram} program
	 * @param {number} duration
	 * @returns {Program}
	 */
	function init(program, duration) {
		const d = /** @type {Program['d']} */ (program.b - t);
		duration *= Math.abs(d);
		return {
			a: t,
			b: program.b,
			d,
			duration,
			start: program.start,
			end: program.start + duration,
			group: program.group
		};
	}

	/**
	 * @param {INTRO | OUTRO} b
	 * @returns {void}
	 */
	function go(b) {
		const {
			delay = 0,
			duration = 300,
			easing = _utils_js__WEBPACK_IMPORTED_MODULE_0__.identity,
			tick = _utils_js__WEBPACK_IMPORTED_MODULE_0__.noop,
			css
		} = config || null_transition;

		/**
		 * @type {PendingProgram} */
		const program = {
			start: (0,_environment_js__WEBPACK_IMPORTED_MODULE_1__.now)() + delay,
			b
		};

		if (!b) {
			// @ts-ignore todo: improve typings
			program.group = outros;
			outros.r += 1;
		}

		if ('inert' in node) {
			if (b) {
				if (original_inert_value !== undefined) {
					// aborted/reversed outro — restore previous inert value
					node.inert = original_inert_value;
				}
			} else {
				original_inert_value = /** @type {HTMLElement} */ (node).inert;
				node.inert = true;
			}
		}

		if (running_program || pending_program) {
			pending_program = program;
		} else {
			// if this is an intro, and there's a delay, we need to do
			// an initial tick and/or apply CSS animation immediately
			if (css) {
				clear_animation();
				animation_name = (0,_style_manager_js__WEBPACK_IMPORTED_MODULE_3__.create_rule)(node, t, b, duration, delay, easing, css);
			}
			if (b) tick(0, 1);
			running_program = init(program, duration);
			(0,_scheduler_js__WEBPACK_IMPORTED_MODULE_5__.add_render_callback)(() => dispatch(node, b, 'start'));
			(0,_loop_js__WEBPACK_IMPORTED_MODULE_2__.loop)((now) => {
				if (pending_program && now > pending_program.start) {
					running_program = init(pending_program, duration);
					pending_program = null;
					dispatch(node, running_program.b, 'start');
					if (css) {
						clear_animation();
						animation_name = (0,_style_manager_js__WEBPACK_IMPORTED_MODULE_3__.create_rule)(
							node,
							t,
							running_program.b,
							running_program.duration,
							0,
							easing,
							config.css
						);
					}
				}
				if (running_program) {
					if (now >= running_program.end) {
						tick((t = running_program.b), 1 - t);
						dispatch(node, running_program.b, 'end');
						if (!pending_program) {
							// we're done
							if (running_program.b) {
								// intro — we can tidy up immediately
								clear_animation();
							} else {
								// outro — needs to be coordinated
								if (!--running_program.group.r) (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.run_all)(running_program.group.c);
							}
						}
						running_program = null;
					} else if (now >= running_program.start) {
						const p = now - running_program.start;
						t = running_program.a + running_program.d * easing(p / running_program.duration);
						tick(t, 1 - t);
					}
				}
				return !!(running_program || pending_program);
			});
		}
	}
	return {
		run(b) {
			if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.is_function)(config)) {
				wait().then(() => {
					const opts = { direction: b ? 'in' : 'out' };
					// @ts-ignore
					config = config(opts);
					go(b);
				});
			} else {
				go(b);
			}
		},
		end() {
			clear_animation();
			running_program = pending_program = null;
		}
	};
}

/** @typedef {1} INTRO */
/** @typedef {0} OUTRO */
/** @typedef {{ direction: 'in' | 'out' | 'both' }} TransitionOptions */
/** @typedef {(node: Element, params: any, options: TransitionOptions) => import('../transition/public.js').TransitionConfig} TransitionFn */

/**
 * @typedef {Object} Outro
 * @property {number} r
 * @property {Function[]} c
 * @property {Object} p
 */

/**
 * @typedef {Object} PendingProgram
 * @property {number} start
 * @property {INTRO|OUTRO} b
 * @property {Outro} [group]
 */

/**
 * @typedef {Object} Program
 * @property {number} a
 * @property {INTRO|OUTRO} b
 * @property {1|-1} d
 * @property {number} duration
 * @property {number} start
 * @property {number} end
 * @property {Outro} [group]
 */


/***/ }),

/***/ "./node_modules/svelte/src/runtime/internal/utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/svelte/src/runtime/internal/utils.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   action_destroyer: () => (/* binding */ action_destroyer),
/* harmony export */   add_location: () => (/* binding */ add_location),
/* harmony export */   assign: () => (/* binding */ assign),
/* harmony export */   blank_object: () => (/* binding */ blank_object),
/* harmony export */   component_subscribe: () => (/* binding */ component_subscribe),
/* harmony export */   compute_rest_props: () => (/* binding */ compute_rest_props),
/* harmony export */   compute_slots: () => (/* binding */ compute_slots),
/* harmony export */   contenteditable_truthy_values: () => (/* binding */ contenteditable_truthy_values),
/* harmony export */   create_slot: () => (/* binding */ create_slot),
/* harmony export */   exclude_internal_props: () => (/* binding */ exclude_internal_props),
/* harmony export */   get_all_dirty_from_scope: () => (/* binding */ get_all_dirty_from_scope),
/* harmony export */   get_slot_changes: () => (/* binding */ get_slot_changes),
/* harmony export */   get_store_value: () => (/* binding */ get_store_value),
/* harmony export */   has_prop: () => (/* binding */ has_prop),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   is_empty: () => (/* binding */ is_empty),
/* harmony export */   is_function: () => (/* binding */ is_function),
/* harmony export */   is_promise: () => (/* binding */ is_promise),
/* harmony export */   noop: () => (/* binding */ noop),
/* harmony export */   not_equal: () => (/* binding */ not_equal),
/* harmony export */   null_to_empty: () => (/* binding */ null_to_empty),
/* harmony export */   once: () => (/* binding */ once),
/* harmony export */   run: () => (/* binding */ run),
/* harmony export */   run_all: () => (/* binding */ run_all),
/* harmony export */   safe_not_equal: () => (/* binding */ safe_not_equal),
/* harmony export */   set_store_value: () => (/* binding */ set_store_value),
/* harmony export */   split_css_unit: () => (/* binding */ split_css_unit),
/* harmony export */   src_url_equal: () => (/* binding */ src_url_equal),
/* harmony export */   srcset_url_equal: () => (/* binding */ srcset_url_equal),
/* harmony export */   subscribe: () => (/* binding */ subscribe),
/* harmony export */   update_slot: () => (/* binding */ update_slot),
/* harmony export */   update_slot_base: () => (/* binding */ update_slot_base),
/* harmony export */   validate_store: () => (/* binding */ validate_store)
/* harmony export */ });
/** @returns {void} */
function noop() {}

const identity = (x) => x;

/**
 * @template T
 * @template S
 * @param {T} tar
 * @param {S} src
 * @returns {T & S}
 */
function assign(tar, src) {
	// @ts-ignore
	for (const k in src) tar[k] = src[k];
	return /** @type {T & S} */ (tar);
}

// Adapted from https://github.com/then/is-promise/blob/master/index.js
// Distributed under MIT License https://github.com/then/is-promise/blob/master/LICENSE
/**
 * @param {any} value
 * @returns {value is PromiseLike<any>}
 */
function is_promise(value) {
	return (
		!!value &&
		(typeof value === 'object' || typeof value === 'function') &&
		typeof (/** @type {any} */ (value).then) === 'function'
	);
}

/** @returns {void} */
function add_location(element, file, line, column, char) {
	element.__svelte_meta = {
		loc: { file, line, column, char }
	};
}

function run(fn) {
	return fn();
}

function blank_object() {
	return Object.create(null);
}

/**
 * @param {Function[]} fns
 * @returns {void}
 */
function run_all(fns) {
	fns.forEach(run);
}

/**
 * @param {any} thing
 * @returns {thing is Function}
 */
function is_function(thing) {
	return typeof thing === 'function';
}

/** @returns {boolean} */
function safe_not_equal(a, b) {
	return a != a ? b == b : a !== b || (a && typeof a === 'object') || typeof a === 'function';
}

let src_url_equal_anchor;

/**
 * @param {string} element_src
 * @param {string} url
 * @returns {boolean}
 */
function src_url_equal(element_src, url) {
	if (element_src === url) return true;
	if (!src_url_equal_anchor) {
		src_url_equal_anchor = document.createElement('a');
	}
	// This is actually faster than doing URL(..).href
	src_url_equal_anchor.href = url;
	return element_src === src_url_equal_anchor.href;
}

/** @param {string} srcset */
function split_srcset(srcset) {
	return srcset.split(',').map((src) => src.trim().split(' ').filter(Boolean));
}

/**
 * @param {HTMLSourceElement | HTMLImageElement} element_srcset
 * @param {string | undefined | null} srcset
 * @returns {boolean}
 */
function srcset_url_equal(element_srcset, srcset) {
	const element_urls = split_srcset(element_srcset.srcset);
	const urls = split_srcset(srcset || '');

	return (
		urls.length === element_urls.length &&
		urls.every(
			([url, width], i) =>
				width === element_urls[i][1] &&
				// We need to test both ways because Vite will create an a full URL with
				// `new URL(asset, import.meta.url).href` for the client when `base: './'`, and the
				// relative URLs inside srcset are not automatically resolved to absolute URLs by
				// browsers (in contrast to img.src). This means both SSR and DOM code could
				// contain relative or absolute URLs.
				(src_url_equal(element_urls[i][0], url) || src_url_equal(url, element_urls[i][0]))
		)
	);
}

/** @returns {boolean} */
function not_equal(a, b) {
	return a != a ? b == b : a !== b;
}

/** @returns {boolean} */
function is_empty(obj) {
	return Object.keys(obj).length === 0;
}

/** @returns {void} */
function validate_store(store, name) {
	if (store != null && typeof store.subscribe !== 'function') {
		throw new Error(`'${name}' is not a store with a 'subscribe' method`);
	}
}

function subscribe(store, ...callbacks) {
	if (store == null) {
		for (const callback of callbacks) {
			callback(undefined);
		}
		return noop;
	}
	const unsub = store.subscribe(...callbacks);
	return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

/**
 * Get the current value from a store by subscribing and immediately unsubscribing.
 *
 * https://svelte.dev/docs/svelte-store#get
 * @template T
 * @param {import('../store/public.js').Readable<T>} store
 * @returns {T}
 */
function get_store_value(store) {
	let value;
	subscribe(store, (_) => (value = _))();
	return value;
}

/** @returns {void} */
function component_subscribe(component, store, callback) {
	component.$$.on_destroy.push(subscribe(store, callback));
}

function create_slot(definition, ctx, $$scope, fn) {
	if (definition) {
		const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
		return definition[0](slot_ctx);
	}
}

function get_slot_context(definition, ctx, $$scope, fn) {
	return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}

function get_slot_changes(definition, $$scope, dirty, fn) {
	if (definition[2] && fn) {
		const lets = definition[2](fn(dirty));
		if ($$scope.dirty === undefined) {
			return lets;
		}
		if (typeof lets === 'object') {
			const merged = [];
			const len = Math.max($$scope.dirty.length, lets.length);
			for (let i = 0; i < len; i += 1) {
				merged[i] = $$scope.dirty[i] | lets[i];
			}
			return merged;
		}
		return $$scope.dirty | lets;
	}
	return $$scope.dirty;
}

/** @returns {void} */
function update_slot_base(
	slot,
	slot_definition,
	ctx,
	$$scope,
	slot_changes,
	get_slot_context_fn
) {
	if (slot_changes) {
		const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
		slot.p(slot_context, slot_changes);
	}
}

/** @returns {void} */
function update_slot(
	slot,
	slot_definition,
	ctx,
	$$scope,
	dirty,
	get_slot_changes_fn,
	get_slot_context_fn
) {
	const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
	update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn);
}

/** @returns {any[] | -1} */
function get_all_dirty_from_scope($$scope) {
	if ($$scope.ctx.length > 32) {
		const dirty = [];
		const length = $$scope.ctx.length / 32;
		for (let i = 0; i < length; i++) {
			dirty[i] = -1;
		}
		return dirty;
	}
	return -1;
}

/** @returns {{}} */
function exclude_internal_props(props) {
	const result = {};
	for (const k in props) if (k[0] !== '$') result[k] = props[k];
	return result;
}

/** @returns {{}} */
function compute_rest_props(props, keys) {
	const rest = {};
	keys = new Set(keys);
	for (const k in props) if (!keys.has(k) && k[0] !== '$') rest[k] = props[k];
	return rest;
}

/** @returns {{}} */
function compute_slots(slots) {
	const result = {};
	for (const key in slots) {
		result[key] = true;
	}
	return result;
}

/** @returns {(this: any, ...args: any[]) => void} */
function once(fn) {
	let ran = false;
	return function (...args) {
		if (ran) return;
		ran = true;
		fn.call(this, ...args);
	};
}

function null_to_empty(value) {
	return value == null ? '' : value;
}

function set_store_value(store, ret, value) {
	store.set(value);
	return ret;
}

const has_prop = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

function action_destroyer(action_result) {
	return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}

/** @param {number | string} value
 * @returns {[number, string]}
 */
function split_css_unit(value) {
	const split = typeof value === 'string' && value.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return split ? [parseFloat(split[1]), split[2] || 'px'] : [/** @type {number} */ (value), 'px'];
}

const contenteditable_truthy_values = ['', true, 1, 'true', 'contenteditable'];


/***/ }),

/***/ "./node_modules/svelte/src/runtime/store/index.js":
/*!********************************************************!*\
  !*** ./node_modules/svelte/src/runtime/store/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   derived: () => (/* binding */ derived),
/* harmony export */   get: () => (/* reexport safe */ _internal_index_js__WEBPACK_IMPORTED_MODULE_0__.get_store_value),
/* harmony export */   readable: () => (/* binding */ readable),
/* harmony export */   readonly: () => (/* binding */ readonly),
/* harmony export */   writable: () => (/* binding */ writable)
/* harmony export */ });
/* harmony import */ var _internal_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal/index.js */ "./node_modules/svelte/src/runtime/internal/index.js");


const subscriber_queue = [];

/**
 * Creates a `Readable` store that allows reading by subscription.
 *
 * https://svelte.dev/docs/svelte-store#readable
 * @template T
 * @param {T} [value] initial value
 * @param {import('./public.js').StartStopNotifier<T>} [start]
 * @returns {import('./public.js').Readable<T>}
 */
function readable(value, start) {
	return {
		subscribe: writable(value, start).subscribe
	};
}

/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 *
 * https://svelte.dev/docs/svelte-store#writable
 * @template T
 * @param {T} [value] initial value
 * @param {import('./public.js').StartStopNotifier<T>} [start]
 * @returns {import('./public.js').Writable<T>}
 */
function writable(value, start = _internal_index_js__WEBPACK_IMPORTED_MODULE_0__.noop) {
	/** @type {import('./public.js').Unsubscriber} */
	let stop;
	/** @type {Set<import('./private.js').SubscribeInvalidateTuple<T>>} */
	const subscribers = new Set();
	/** @param {T} new_value
	 * @returns {void}
	 */
	function set(new_value) {
		if ((0,_internal_index_js__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal)(value, new_value)) {
			value = new_value;
			if (stop) {
				// store is ready
				const run_queue = !subscriber_queue.length;
				for (const subscriber of subscribers) {
					subscriber[1]();
					subscriber_queue.push(subscriber, value);
				}
				if (run_queue) {
					for (let i = 0; i < subscriber_queue.length; i += 2) {
						subscriber_queue[i][0](subscriber_queue[i + 1]);
					}
					subscriber_queue.length = 0;
				}
			}
		}
	}

	/**
	 * @param {import('./public.js').Updater<T>} fn
	 * @returns {void}
	 */
	function update(fn) {
		set(fn(value));
	}

	/**
	 * @param {import('./public.js').Subscriber<T>} run
	 * @param {import('./private.js').Invalidator<T>} [invalidate]
	 * @returns {import('./public.js').Unsubscriber}
	 */
	function subscribe(run, invalidate = _internal_index_js__WEBPACK_IMPORTED_MODULE_0__.noop) {
		/** @type {import('./private.js').SubscribeInvalidateTuple<T>} */
		const subscriber = [run, invalidate];
		subscribers.add(subscriber);
		if (subscribers.size === 1) {
			stop = start(set, update) || _internal_index_js__WEBPACK_IMPORTED_MODULE_0__.noop;
		}
		run(value);
		return () => {
			subscribers.delete(subscriber);
			if (subscribers.size === 0 && stop) {
				stop();
				stop = null;
			}
		};
	}
	return { set, update, subscribe };
}

/**
 * Derived value store by synchronizing one or more readable stores and
 * applying an aggregation function over its input values.
 *
 * https://svelte.dev/docs/svelte-store#derived
 * @template {import('./private.js').Stores} S
 * @template T
 * @overload
 * @param {S} stores - input stores
 * @param {(values: import('./private.js').StoresValues<S>, set: (value: T) => void, update: (fn: import('./public.js').Updater<T>) => void) => import('./public.js').Unsubscriber | void} fn - function callback that aggregates the values
 * @param {T} [initial_value] - initial value
 * @returns {import('./public.js').Readable<T>}
 */

/**
 * Derived value store by synchronizing one or more readable stores and
 * applying an aggregation function over its input values.
 *
 * https://svelte.dev/docs/svelte-store#derived
 * @template {import('./private.js').Stores} S
 * @template T
 * @overload
 * @param {S} stores - input stores
 * @param {(values: import('./private.js').StoresValues<S>) => T} fn - function callback that aggregates the values
 * @param {T} [initial_value] - initial value
 * @returns {import('./public.js').Readable<T>}
 */

/**
 * @template {import('./private.js').Stores} S
 * @template T
 * @param {S} stores
 * @param {Function} fn
 * @param {T} [initial_value]
 * @returns {import('./public.js').Readable<T>}
 */
function derived(stores, fn, initial_value) {
	const single = !Array.isArray(stores);
	/** @type {Array<import('./public.js').Readable<any>>} */
	const stores_array = single ? [stores] : stores;
	if (!stores_array.every(Boolean)) {
		throw new Error('derived() expects stores as input, got a falsy value');
	}
	const auto = fn.length < 2;
	return readable(initial_value, (set, update) => {
		let started = false;
		const values = [];
		let pending = 0;
		let cleanup = _internal_index_js__WEBPACK_IMPORTED_MODULE_0__.noop;
		const sync = () => {
			if (pending) {
				return;
			}
			cleanup();
			const result = fn(single ? values[0] : values, set, update);
			if (auto) {
				set(result);
			} else {
				cleanup = (0,_internal_index_js__WEBPACK_IMPORTED_MODULE_0__.is_function)(result) ? result : _internal_index_js__WEBPACK_IMPORTED_MODULE_0__.noop;
			}
		};
		const unsubscribers = stores_array.map((store, i) =>
			(0,_internal_index_js__WEBPACK_IMPORTED_MODULE_0__.subscribe)(
				store,
				(value) => {
					values[i] = value;
					pending &= ~(1 << i);
					if (started) {
						sync();
					}
				},
				() => {
					pending |= 1 << i;
				}
			)
		);
		started = true;
		sync();
		return function stop() {
			(0,_internal_index_js__WEBPACK_IMPORTED_MODULE_0__.run_all)(unsubscribers);
			cleanup();
			// We need to set this to false because callbacks can still happen despite having unsubscribed:
			// Callbacks might already be placed in the queue which doesn't know it should no longer
			// invoke this derived store.
			started = false;
		};
	});
}

/**
 * Takes a store and returns a new one derived from the old one that is readable.
 *
 * https://svelte.dev/docs/svelte-store#readonly
 * @template T
 * @param {import('./public.js').Readable<T>} store  - store to make readonly
 * @returns {import('./public.js').Readable<T>}
 */
function readonly(store) {
	return {
		subscribe: store.subscribe.bind(store)
	};
}




/***/ }),

/***/ "./node_modules/svelte/src/shared/boolean_attributes.js":
/*!**************************************************************!*\
  !*** ./node_modules/svelte/src/shared/boolean_attributes.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boolean_attributes: () => (/* binding */ boolean_attributes)
/* harmony export */ });
const _boolean_attributes = /** @type {const} */ ([
	'allowfullscreen',
	'allowpaymentrequest',
	'async',
	'autofocus',
	'autoplay',
	'checked',
	'controls',
	'default',
	'defer',
	'disabled',
	'formnovalidate',
	'hidden',
	'inert',
	'ismap',
	'loop',
	'multiple',
	'muted',
	'nomodule',
	'novalidate',
	'open',
	'playsinline',
	'readonly',
	'required',
	'reversed',
	'selected'
]);

/**
 * List of HTML boolean attributes (e.g. `<input disabled>`).
 * Source: https://html.spec.whatwg.org/multipage/indices.html
 *
 * @type {Set<string>}
 */
const boolean_attributes = new Set([..._boolean_attributes]);

/** @typedef {typeof _boolean_attributes[number]} BooleanAttributes */


/***/ }),

/***/ "./node_modules/svelte/src/shared/utils/names.js":
/*!*******************************************************!*\
  !*** ./node_modules/svelte/src/shared/utils/names.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   is_html: () => (/* binding */ is_html),
/* harmony export */   is_svg: () => (/* binding */ is_svg),
/* harmony export */   is_void: () => (/* binding */ is_void)
/* harmony export */ });
/** regex of all html void element names */
const void_element_names =
	/^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;

/** regex of all html element names. svg and math are omitted because they belong to the svg elements namespace */
const html_element_names =
	/^(?:a|abbr|address|area|article|aside|audio|b|base|bdi|bdo|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|data|datalist|dd|del|details|dfn|dialog|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|head|header|hr|html|i|iframe|img|input|ins|kbd|label|legend|li|link|main|map|mark|meta|meter|nav|noscript|object|ol|optgroup|option|output|p|param|picture|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|source|span|strong|style|sub|summary|sup|table|tbody|td|template|textarea|tfoot|th|thead|time|title|tr|track|u|ul|var|video|wbr)$/;

/** regex of all svg element names */
const svg =
	/^(?:altGlyph|altGlyphDef|altGlyphItem|animate|animateColor|animateMotion|animateTransform|circle|clipPath|color-profile|cursor|defs|desc|discard|ellipse|feBlend|feColorMatrix|feComponentTransfer|feComposite|feConvolveMatrix|feDiffuseLighting|feDisplacementMap|feDistantLight|feDropShadow|feFlood|feFuncA|feFuncB|feFuncG|feFuncR|feGaussianBlur|feImage|feMerge|feMergeNode|feMorphology|feOffset|fePointLight|feSpecularLighting|feSpotLight|feTile|feTurbulence|filter|font|font-face|font-face-format|font-face-name|font-face-src|font-face-uri|foreignObject|g|glyph|glyphRef|hatch|hatchpath|hkern|image|line|linearGradient|marker|mask|mesh|meshgradient|meshpatch|meshrow|metadata|missing-glyph|mpath|path|pattern|polygon|polyline|radialGradient|rect|set|solidcolor|stop|svg|switch|symbol|text|textPath|tref|tspan|unknown|use|view|vkern)$/;

/**
 * @param {string} name
 * @returns {boolean}
 */
function is_void(name) {
	return void_element_names.test(name) || name.toLowerCase() === '!doctype';
}

/**
 * @param {string} name
 * @returns {boolean}
 */
function is_html(name) {
	return html_element_names.test(name);
}

/**
 * @param {string} name
 * @returns {boolean}
 */
function is_svg(name) {
	return svg.test(name);
}


/***/ }),

/***/ "./node_modules/svelte/src/shared/version.js":
/*!***************************************************!*\
  !*** ./node_modules/svelte/src/shared/version.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PUBLIC_VERSION: () => (/* binding */ PUBLIC_VERSION),
/* harmony export */   VERSION: () => (/* binding */ VERSION)
/* harmony export */ });
// generated during release, do not modify

/**
 * The current version, as set in package.json.
 *
 * https://svelte.dev/docs/svelte-compiler#svelte-version
 * @type {string}
 */
const VERSION = '4.2.18';
const PUBLIC_VERSION = '4';


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************************!*\
  !*** ./blocks/src/calendar/view.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_calendar_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @event-calendar/core */ "./node_modules/@event-calendar/core/index.js");
/* harmony import */ var _event_calendar_time_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @event-calendar/time-grid */ "./node_modules/@event-calendar/time-grid/index.js");
/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */



const ics_calendar = {
  fetch_events: feedUrl => {
    return fetch(feedUrl).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
  },
  init: el => {
    // Get the calendar options from dataset.
    const calendarData = JSON.parse(el.getAttribute('data-ics-settings'));

    // Create a new calendar
    new _event_calendar_core__WEBPACK_IMPORTED_MODULE_0__["default"]({
      target: el,
      props: {
        plugins: [_event_calendar_time_grid__WEBPACK_IMPORTED_MODULE_1__["default"]],
        options: {
          initialView: 'timeGridWeek',
          eventSources: [{
            events: async () => {
              const response = await ics_calendar.fetch_events(calendarData.restUrl);
              console.log('response', response);
              return response;
            }
          }]
        }
      }
    });
  }
};
document.addEventListener('DOMContentLoaded', function () {
  // Parse all the calendars
  const calendars = document.querySelectorAll('.ics-calendar');

  // Loop through each calendar
  Array.from(calendars).forEach(function (calendar) {
    ics_calendar.init(calendar);
  });
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map
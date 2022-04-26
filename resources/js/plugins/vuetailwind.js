import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

import {
  TInput,
  TTextarea,
  TSelect,
  // TRadio,
  TCheckbox,
  TButton,
  TInputGroup,
  // TCard,
  // TAlert,
  TModal,
  TDropdown,
  TRichSelect,
  TPagination,
  // TTag,
  TRadioGroup,
  // TCheckboxGroup,
  TTable,
  TDatepicker,
  // TToggle,
  TDialog
} from 'vue-tailwind/dist/components'

const settings = {
  't-rich-select': {
    component: TRichSelect,
    props: {
      fixedClasses: {
        wrapper: 'relative',
        buttonWrapper: 'inline-block relative w-full',
        selectButton: 'w-full flex text-left justify-between items-center px-3 py-2 text-black transition duration-100 ease-in-out border rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
        selectButtonLabel: 'block truncate',
        selectButtonPlaceholder: 'block truncate',
        selectButtonIcon: 'fill-current flex-shrink-0 ml-1 h-4 w-4',
        selectButtonClearButton: 'rounded flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6 transition duration-100 ease-in-out',
        selectButtonClearIcon: 'fill-current h-3 w-3',
        dropdown: 'absolute w-full z-10 -mt-1 absolute border-b border-l border-r rounded-b shadow-sm z-10',
        dropdownFeedback: '',
        loadingMoreResults: '',
        optionsList: 'overflow-auto',
        searchWrapper: 'inline-block w-full',
        searchBox: 'inline-block w-full',
        optgroup: '',
        option: 'cursor-pointer',
        disabledOption: 'opacity-50 cursor-not-allowed',
        highlightedOption: 'cursor-pointer',
        selectedOption: 'cursor-pointer',
        selectedHighlightedOption: 'cursor-pointer',
        optionContent: '',
        optionLabel: 'truncate block',
        selectedIcon: 'fill-current h-4 w-4',
        enterClass: '',
        enterActiveClass: '',
        enterToClass: '',
        leaveClass: '',
        leaveActiveClass: '',
        leaveToClass: ''
      },
      classes: {
        wrapper: '',
        buttonWrapper: '',
        selectButton: 'bg-white border-gray-300',
        selectButtonLabel: '',
        selectButtonPlaceholder: 'text-gray-400',
        selectButtonIcon: 'text-gray-600',
        selectButtonClearButton: 'hover:bg-indigo-100 text-gray-600',
        selectButtonClearIcon: '',
        dropdown: 'bg-white border-gray-300',
        dropdownFeedback: 'pb-2 px-3 text-gray-400 text-sm',
        loadingMoreResults: 'pb-2 px-3 text-gray-400 text-sm',
        optionsList: '',
        searchWrapper: 'p-2 placeholder-gray-400',
        searchBox: 'px-3 py-2 bg-gray-50 text-sm rounded border focus:outline-none focus:shadow-outline border-gray-300',
        optgroup: 'text-gray-400 uppercase text-xs py-1 px-2 font-semibold',
        option: '',
        disabledOption: '',
        highlightedOption: 'bg-indigo-100',
        selectedOption: 'font-semibold bg-gray-100 bg-indigo-500 font-semibold text-white',
        selectedHighlightedOption: 'font-semibold bg-gray-100 bg-indigo-600 font-semibold text-white',
        optionContent: 'flex justify-between items-center px-3 py-2',
        optionLabel: '',
        selectedIcon: '',
        enterClass: 'opacity-0',
        enterActiveClass: 'transition ease-out duration-100',
        enterToClass: 'opacity-100',
        leaveClass: 'opacity-100',
        leaveActiveClass: 'transition ease-in duration-75',
        leaveToClass: 'opacity-0',
        selectButtonTagWrapper: 'flex flex-wrap overflow-hidden',
        selectButtonTag: 'bg-indigo-500 block disabled:cursor-not-allowed disabled:opacity-50 duration-100 ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 rounded shadow-sm text-sm text-white transition white-space-no m-0.5 max-w-full overflow-hidden h-8 flex items-center',
        selectButtonTagText: 'px-3',
        selectButtonTagDeleteButton: '-ml-1.5 h-full hover:bg-indigo-600 hover:shadow-sm inline-flex items-center px-2 transition',
        selectButtonTagDeleteButtonIcon: 'w-3 h-3'
      },
      variants: {
        danger: {
          selectButton: 'border-red-300 bg-red-50 text-red-900',
          selectButtonPlaceholder: 'text-red-200',
          selectButtonIcon: 'text-red-500',
          selectButtonClearButton: 'hover:bg-red-200 text-red-500',
          dropdown: 'bg-red-50 border-red-300'
        },
        success: {
          selectButton: 'border-green-300 bg-green-50 text-green-900',
          selectButtonIcon: 'text-green-500',
          selectButtonClearButton: 'hover:bg-green-200 text-green-500',
          dropdown: 'bg-green-50 border-green-300'
        }
      }
    }
  },
  't-datepicker': {
    component: TDatepicker,
    props: {
      fixedClasses: {
        navigator: 'flex',
        navigatorViewButton: 'flex items-center',
        navigatorViewButtonIcon: 'flex-shrink-0 h-5 w-5',
        navigatorViewButtonBackIcon: 'flex-shrink-0 h-5 w-5',
        navigatorLabel: 'flex items-center py-1',
        navigatorPrevButtonIcon: 'h-6 w-6 inline-flex',
        navigatorNextButtonIcon: 'h-6 w-6 inline-flex',
        inputWrapper: 'relative',
        viewGroup: 'inline-flex flex-wrap',
        view: 'w-64',
        calendarDaysWrapper: 'grid grid-cols-7',
        calendarHeaderWrapper: 'grid grid-cols-7',
        monthWrapper: 'grid grid-cols-4',
        yearWrapper: 'grid grid-cols-4',
        input: 'block w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
        clearButton: 'flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6',
        clearButtonIcon: 'fill-current h-3 w-3'
      },
      classes: {
        wrapper: 'flex flex-col',
        dropdownWrapper: 'relative z-10',
        dropdown: 'origin-top-left absolute rounded shadow bg-white overflow-hidden mt-1',
        enterClass: 'opacity-0 scale-95',
        enterActiveClass: 'transition transform ease-out duration-100',
        enterToClass: 'opacity-100 scale-100',
        leaveClass: 'opacity-100 scale-100',
        leaveActiveClass: 'transition transform ease-in duration-75',
        leaveToClass: 'opacity-0 scale-95',
        inlineWrapper: '',
        inlineViews: 'rounded bg-white border mt-1 inline-flex',
        inputWrapper: '',
        input: 'text-black placeholder-gray-400 border-gray-300',
        clearButton: 'hover:bg-gray-100 rounded transition duration-100 ease-in-out text-gray-600',
        clearButtonIcon: '',
        viewGroup: '',
        view: '',
        navigator: 'pt-2 px-3',
        navigatorViewButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer rounded-full px-2 py-1 -ml-1 hover:bg-gray-100',
        navigatorViewButtonIcon: 'fill-current text-gray-400',
        navigatorViewButtonBackIcon: 'fill-current text-gray-400',
        navigatorViewButtonMonth: 'text-gray-700 font-semibold',
        navigatorViewButtonYear: 'text-gray-500 ml-1',
        navigatorViewButtonYearRange: 'text-gray-500 ml-1',
        navigatorLabel: 'py-1',
        navigatorLabelMonth: 'text-gray-700 font-semibold',
        navigatorLabelYear: 'text-gray-500 ml-1',
        navigatorPrevButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-100 rounded-full p-1 ml-2 ml-auto disabled:opacity-50 disabled:cursor-not-allowed',
        navigatorNextButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-100 rounded-full p-1 -mr-1 disabled:opacity-50 disabled:cursor-not-allowed',
        navigatorPrevButtonIcon: 'text-gray-400',
        navigatorNextButtonIcon: 'text-gray-400',
        calendarWrapper: 'px-3 pt-2',
        calendarHeaderWrapper: '',
        calendarHeaderWeekDay: 'uppercase text-xs text-gray-500 w-8 h-8 flex items-center justify-center',
        calendarDaysWrapper: '',
        calendarDaysDayWrapper: 'w-full h-8 flex flex-shrink-0 items-center',
        otherMonthDay: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed',
        emptyDay: '',
        inRangeFirstDay: 'text-sm bg-blue-500 text-white w-full h-8 rounded-l-full',
        inRangeLastDay: 'text-sm bg-blue-500 text-white w-full h-8 rounded-r-full',
        inRangeDay: 'text-sm bg-blue-200 w-full h-8 disabled:opacity-50 disabled:cursor-not-allowed',
        selectedDay: 'text-sm rounded-full w-8 h-8 mx-auto bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed',
        activeDay: 'text-sm rounded-full bg-blue-100 w-8 h-8 mx-auto disabled:opacity-50 disabled:cursor-not-allowed',
        highlightedDay: 'text-sm rounded-full bg-blue-200 w-8 h-8 mx-auto disabled:opacity-50 disabled:cursor-not-allowed',
        day: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed',
        today: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed border border-blue-500',
        monthWrapper: 'px-3 pt-2',
        selectedMonth: 'text-sm rounded w-full h-12 mx-auto bg-blue-500 text-white',
        activeMonth: 'text-sm rounded w-full h-12 mx-auto bg-blue-100',
        month: 'text-sm rounded w-full h-12 mx-auto hover:bg-blue-100',
        yearWrapper: 'px-3 pt-2',
        year: 'text-sm rounded w-full h-12 mx-auto hover:bg-blue-100',
        selectedYear: 'text-sm rounded w-full h-12 mx-auto bg-blue-500 text-white',
        activeYear: 'text-sm rounded w-full h-12 mx-auto bg-blue-100'
      },
      variants: {
        danger: {
          input: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
          clearButton: 'hover:bg-red-200 text-red-500'
        }
      }
    }
  },
  't-modal': {
    component: TModal,
    props: {
      fixedClasses: {
        overlay: 'z-40  overflow-auto scrolling-touch left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-opacity-50',
        wrapper: 'relative mx-auto z-50 max-w-lg px-3 py-12',
        modal: 'overflow-visible relative  rounded',
        body: 'p-3',
        header: 'border-b p-3 rounded-t',
        footer: ' p-3 rounded-b',
        close: 'flex items-center justify-center rounded-full absolute right-0 top-0 -m-3 h-8 w-8 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50'
      },
      classes: {
        overlay: 'bg-black',
        wrapper: '',
        modal: 'bg-white shadow',
        body: 'p-3',
        header: 'border-gray-100',
        footer: 'bg-gray-100',
        close: 'bg-gray-100 text-gray-600 hover:bg-gray-200',
        closeIcon: 'fill-current h-4 w-4',
        overlayEnterClass: 'opacity-0',
        overlayEnterActiveClass: 'transition ease-out duration-100',
        overlayEnterToClass: 'opacity-100',
        overlayLeaveClass: 'opacity-100',
        overlayLeaveActiveClass: 'transition ease-in duration-75',
        overlayLeaveToClass: 'opacity-0',
        enterClass: '',
        enterActiveClass: '',
        enterToClass: '',
        leaveClass: '',
        leaveActiveClass: '',
        leaveToClass: ''
      },
      variants: {
        danger: {
          overlay: 'bg-red-100',
          header: 'border-red-50 text-red-700',
          close: 'bg-red-50 text-red-700 hover:bg-red-200 border-red-100 border',
          modal: 'bg-white border border-red-100 shadow-lg',
          footer: 'bg-red-50'
        }
      }
    }
  },
  't-dialog': {
    component: TDialog,
    props: {
      fixedClasses: {
        overlay: 'overflow-auto scrolling-touch left-0 top-0 bottom-0 right-0 w-full h-full fixed',
        wrapper: 'relative mx-auto',
        modal: 'overflow-visible relative ',
        close: 'flex items-center justify-center',
        dialog: 'overflow-visible relative'
      },
      classes: {
        close: 'bg-gray-100 text-gray-600 rounded-full absolute right-0 top-0 -m-3 h-8 w-8 transition duration-100 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
        closeIcon: 'fill-current h-4 w-4',

        overlay: 'z-40 bg-black bg-opacity-50',
        wrapper: 'z-50 max-w-lg px-3 py-12',
        dialog: 'bg-white shadow rounded text-left',

        body: 'p-3 space-y-3',
        buttons: 'p-3 flex space-x-4 justify-center bg-gray-100 rounded-b',

        iconWrapper: 'bg-gray-100 flex flex-shrink-0 h-12 items-center justify-center rounded-full w-12 mx-auto',
        icon: 'w-6 h-6 text-gray-500',
        content: 'w-full flex justify-center flex-col',

        titleWrapper: '',
        title: 'text-lg font-semibold text-center',

        textWrapper: 'text-left w-full text-center',
        text: '',

        cancelButton: 'text-sm font-medium leading-5 text-center transition-colors duration-150 border border-transparent rounded-md focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 bg-white border-gray-200 hover:border-gray-300 text-black px-3 py-2',
        okButton: 'text-sm font-medium leading-5 text-center transition-colors duration-150 border border-transparent rounded-md focus:outline-none px-4 py-2 bg-indigo-600 focus:shadow-outline-indigo active:bg-indigo-600 hover:bg-indigo-700 text-white',

        inputWrapper: 'mt-3 flex items-center space-x-3',

        input: 'block w-full px-3 py-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed w-full',
        select: 'block w-full px-3 py-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50  disabled:opacity-50 disabled:cursor-not-allowed w-full',

        radioWrapper: 'flex items-center space-x-2',
        radio: 'text-blue-500 transition duration-100 ease-in-out border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0  disabled:opacity-50 disabled:cursor-not-allowed',
        radioText: '',

        checkboxWrapper: 'flex items-center space-x-2',
        checkbox: 'text-blue-500 transition duration-100 ease-in-out border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0  disabled:opacity-50 disabled:cursor-not-allowed',
        checkboxText: '',

        errorMessage: 'text-red-500 block text-sm',

        busyWrapper: 'absolute bg-opacity-50 bg-white flex h-full items-center justify-center left-0 top-0 w-full',
        busyIcon: 'animate-spin h-6 w-6 fill-current text-gray-500',

        overlayEnterClass: 'opacity-0',
        overlayEnterActiveClass: 'transition ease-out duration-100',
        overlayEnterToClass: 'opacity-100',
        overlayLeaveClass: 'opacity-100',
        overlayLeaveActiveClass: 'transition ease-in duration-75',
        overlayLeaveToClass: 'opacity-0',

        enterClass: '',
        enterActiveClass: '',
        enterToClass: '',
        leaveClass: '',
        leaveActiveClass: '',
        leaveToClass: ''
      }
    }
  },
  't-input': {
    component: TInput,
    props: {
      fixedClasses: 'block w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 focus:shadow-outline-primary disabled:cursor-not-allowed dark:focus:shadow-outline-gray dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700',
      classes: 'placeholder:text-sm text-black placeholder-gray-400 bg-white border-primary-300 focus:border-primary-500 ',
      variants: {
        datatable: 'border-none outline-none focus:border-none',
        danger: 'border-red-300 bg-red-50 dark:border-red-300 placeholder-red-200 dark:placeholder-red-200 text-red-900',
        success: 'border-green-300 bg-green-50 placeholder-gray-400 text-green-900',
        left_icon: 'text-black placeholder-gray-400 bg-white border-primary-300 focus:border-primary-500 pl-10'

      }
    }
  },
  't-input-group': {
    component: TInputGroup,
    props: {
      fixedClasses: {
        wrapper: 'mb-4',
        label: 'block capitalize tracking-wide text-xs  mb-1',
        body: '',
        feedback: 'text-sm',
        description: 'text-sm'
      },
      classes: {
        wrapper: '',
        label: '',
        body: '',
        feedback: 'text-gray-500',
        description: 'text-gray-500'
      },
      variants: {
        danger: {
          label: 'text-red-500',
          feedback: 'text-red-500'
        },
        success: {
          label: 'text-green-500',
          feedback: 'text-green-500'
        }
      }
    }
  },
  't-textarea': {
    component: TTextarea,
    props: {
      fixedClasses: 'border-1 border-primary-300 block w-full rounded text-gray-800 block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:focus:shadow-outline-gray',
      classes: '',
      variants: {
        danger: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
        success: 'border-green-300 bg-green-50 placeholder-gray-400 text-green-900'
      }
    }
  },
  't-button': {
    component: TButton,
    props: {
      fixedClasses: 'text-sm font-medium leading-5 text-center transition-colors duration-150 border border-transparent rounded-md focus:outline-none',
      classes: 'shadow-sm px-4 py-2 bg-primary-600 focus:shadow-outline-primary active:bg-primary-600 hover:bg-primary-700 text-white',
      variants: {
        primary: 'px-4 py-2 bg-indigo-600 focus:shadow-outline-indigo active:bg-indigo-600 hover:bg-indigo-700 text-white',
        danger: 'px-4 py-2 bg-danger-600 focus:shadow-outline-danger active:bg-danger-600 hover:bg-danger-700 text-white',
        larger: 'px-10 py-4 bg-primary-600 focus:shadow-outline-primary active:bg-primary-600 hover:bg-primary-700 text-white',
        large: 'px-5 py-3 bg-primary-600 focus:shadow-outline-primary active:bg-primary-600 hover:bg-primary-700 text-white',
        disabled: 'px-4 py-2 cursor-not-allowed bg-primary-600 border border-transparent rounded-lg opacity-50 text-white',
        small: 'px-3 py-1 bg-primary-600 focus:shadow-outline-primary active:bg-primary-600 hover:bg-primary-700 text-white',
        link: 'text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline',
        default: 'dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 bg-white border-gray-200 hover:border-gray-300 text-black px-4 py-2',
        dropdown: 'w-full font-medium text-sm flex items-center py-1 px-3 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 hover:text-gray-900 text-gray-700 dark:text-gray-200',
        icon: 'hover:bg-gray-100 dark:hover:bg-gray-900'
      }
    }
  },
  't-checkbox': {
    component: TCheckbox,
    props: {
      fixedClasses: 'shadow-sm rounded border-selectable-300 form-checkbox focus:outline-none dark:focus:shadow-outline-primary  dark:focus:shadow-outline-gray',
      classes: 'text-primary-600 focus:border-primary-400 focus:shadow-outline-primary'
    }
  },
  't-dropdown': {
    component: TDropdown,
    props: {
      fixedClasses: {
        button: 'flex items-center text-white block transition duration-100 ease-in-out border border-transparent',
        wrapper: 'inline-flex flex-col',
        dropdown: 'origin-top-right z-10 absolute top-full left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 min-w-36 py-1.5 rounded shadow-lg overflow-hidden mt-1',
        enterClass: 'opacity-0 scale-95',
        enterActiveClass: 'transition transform ease-out duration-100',
        enterToClass: 'opacity-100 scale-100',
        leaveClass: 'opacity-100 scale-100',
        leaveActiveClass: 'transition transform ease-in duration-75',
        leaveToClass: 'opacity-0 scale-95'
      },
      classes: {
        button: 'bg-indigo-500 hover:bg-indigo-600 px-2 py-1 rounded shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
        dropdown: 'bg-white',
        dropdownWrapper: 'relative z-10 '

      },
      variants: {
        danger: {
          button: 'bg-red-500 hover:bg-red-600',
          dropdown: 'bg-red-50'
        },
        table: {
          button: 'dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 bg-white border-gray-200 hover:border-gray-300 text-black px-2 py-1 rounded',
          dropdownWrapper: 'absolute z-10 '

        }
      }
    }
  },
  't-table': {
    component: TTable,
    props: {
      classes: {
        table: 'table-auto w-full',
        thead: 'text-xs font-semibold uppercase text-gray-500 bg-gray-50 border-t border-b border-gray-200 dark:border-gray-600',
        theadTr: 'text-xs font-semibold tracking-wide text-left text-gray-500 uppercase dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800',
        theadTh: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
        tbody: 'text-sm divide-y divide-gray-200 dark:divide-gray-600',
        tr: '',
        td: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap dark:text-gray-200',
        tfoot: '',
        tfootTr: '',
        tfootTd: ''
      },
      variants: {
        thin: {
          td: 'p-1 whitespace-no-wrap text-sm',
          theadTh: 'p-1 font-semibold text-left bg-gray-100 border-b text-sm'
        }
      }
    }
  },
  't-pagination': {
    component: TPagination,
    props: {
      classes: {
        wrapper: 'table border-collapse text-center dark:bg-gray-600 bg-white mx-auto shadow-sm',
        element: 'dark:border-gray-600 w-8 h-8 border border-gray-200 table-cell hover:border-indigo-100',
        activeElement: 'w-8 h-8 border border-gray-200 border-indigo-500 table-cell hover:border-indigo-600',
        disabledElement: 'w-8 h-8 border dark:border-gray-900 border-gray-200 table-cell',
        ellipsisElement: 'w-8 h-8 border dark:border-gray-900 border-gray-200 hidden md:table-cell',
        activeButton: 'bg-indigo-600 w-full h-full text-white hover:bg-indigo-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:ring-opacity-50',
        disabledButton: 'dark:text-gray-100 text-gray-600 font-semibold opacity-50 w-full h-full cursor-not-allowed transition duration-100 ease-in-out',
        button: 'font-medium hover:bg-indigo-100 w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:ring-opacity-50',
        ellipsis: ''
      },
      variants: {
        rounded: {
          wrapper: ' mx-auto text-center flex space-x-2',
          element: 'w-8 h-8 rounded-full',
          activeElement: 'w-8 h-8 rounded-full',
          disabledElement: 'w-8 h-8 rounded-full',
          ellipsisElement: 'w-8 h-8 rounded-full hidden md:inline',
          activeButton: 'border border-blue-500 bg-blue-500 w-full h-full rounded-full text-white hover:bg-blue-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
          disabledButton: 'border border-gray-200  opacity-50 w-full h-full rounded-full cursor-not-allowed transition duration-100 ease-in-out',
          button: 'border border-gray-200 hover:bg-blue-100 hover:border-blue-100 rounded-full w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
          ellipsis: ''
        }
      }
    }
  },
  't-select': {
    component: TSelect,
    props: {
      fixedClasses: 'block focus:shadow-outline-primary border-primary-300  focus:outline-none focus:shadow-outline-primary w-full pl-3 pr-10 py-1 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-primary-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed dark:focus:shadow-outline-gray dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700',
      classes: 'px-3 py-2 text-black placeholder-gray-400 bg-white border-gray-300 focus:border-primary-500 ',
      variants: {
        danger: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
        success: 'border-green-300 bg-green-50 placeholder-gray-400 text-green-900',
        table: ''
      }
    }
  },
  't-radio-group': {
    component: TRadioGroup,
    props: {
      classes: {
        groupWrapper: 'flex flex-col',
        label: 'ml-2 text-gray-700 uppercase text-sm',
        input: 'text-primary-500 transition duration-100 ease-in-out border-gray-300 shadow-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed dark:focus:shadow-outline-gray'
      },
      variants: {
        danger: {
          groupWrapper: 'flex flex-col',
          label: 'ml-2 text-red-500 uppercase text-sm',
          input: 'text-red-500 transition duration-100 ease-in-out border-red-500 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed'
        },
        buttons: {
          groupWrapper: 'flex',
          label: '',
          labelChecked: '',
          wrapper: 'mx-1 bg-white border border-gray-300 flex items-center px-4 py-2 rounded shadow-sm cursor-pointer focus:shadow-outline text-sm text-gray-700 hover:text-gray-500 leading-5 uppercase',
          wrapperChecked: 'mx-1 bg-gray-100 border border-gray-300 flex items-center px-4 py-2 rounded shadow-inner cursor-pointer focus:shadow-outline text-sm text-gray-700 hover:text-gray-500 leading-5 uppercase',
          inputWrapper: '',
          inputWrapperChecked: '',
          input: 'absolute invisible'
        }
      }
    }
  }
  // ...Rest of the components
}

Vue.use(VueTailwind, settings)

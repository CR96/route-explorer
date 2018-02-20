const routeDetails = [{
        number: 7,
        name: 'Cadillac-Harper',
        orientation: 'EW',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Mack and Moross', 'Rosa Parks TC'],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5:08am", "12:02am"],
                frequency: [
                    ["peak", 30],
                    ["off-peak", 60]
                ]
            },
            "Saturday": {
                service_hours: ["6:55am", "11:49pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7:00am", "8:48pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: "On Saturdays from 7AM-8PM, this bus departs Rosa Parks Transit Center after a layover as Route 10-Chene. Riders remaining on the bus through the layover may continue without using a transfer."
    },
    {
        number: 9,
        name: 'Chalmers',
        orientation: 'NS',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Jefferson & Maryland', '7 Mile & Gratiot'],
        via: ['Chalmers', "Schoenherr"],
        pdf: "https",
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        services: {
            "Monday-Friday": {
                service_hours: ["5:15am", "8:52pm"],
                frequency: [
                    ["peak", 30],
                    ["off-peak", 60]
                ]
            },
            "Saturday": {
                service_hours: ["6:45am", "7:52pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["8:20am", "5:04pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 10,
        name: 'Chene',
        orientation: 'NS',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Varjo & Van Dyke', 'Rosa Parks TC'],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5am", "10:46pm"],
                frequency: [
                    ["peak", 40],
                    ["off-peak", 60]
                ]
            },
            "Saturday": {
                service_hours: ["6:00am", "8:46pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["8:00am", "7:50pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: "On Saturdays, this bus departs Rosa Parks Transit Center after a layover as Route 7-Cadillac-Harper. Riders remaining on the bus through the layover may continue without using a transfer."
    },
    {
        number: 11,
        name: 'Clairmount',
        orientation: 'EW',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Clark & Fort', 'Lycaste & Jefferson'],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5:10am", "9:03pm"],
                frequency: [
                    ["all day", 45],
                ]
            }
        },
        notes: ""
    },
    {
        number: 12,
        name: 'Conant',
        orientation: 'NS',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Fairgrounds TC', 'Belle Isle'],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5:50am", "8:43pm"],
                frequency: [
                    ["all day", 50],
                ]
            },
            "Saturday": {
                service_hours: ["7:30am", "8:43pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["8:00am", "6:43pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 13,
        name: 'Conner',
        orientation: 'NS',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Conner & Jefferson', 'Bel-Air Center'],
        via: ['Conner'],
        pdf: "https",
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        services: {
            "Monday-Friday": {
                service_hours: ["6:15am", "9:49pm"],
                frequency: [
                    ["peak", 40],
                    ["off-peak", 60]
                ]
            },
            "Saturday": {
                service_hours: ["5:33am", "8:27pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["6:55am", "7:04pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 14,
        name: 'Crosstown',
        orientation: 'EW',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Warren & Telegraph', 'Warren & Moross'],
        via: ['Warren', 'Forest'],
        pdf: "https",
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        services: {
            "Monday-Friday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["peak", 20],
                    ["off-peak", 30],
                    ["late night", 60]
                ]
            },
            "Saturday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["all day", 45],
                    ["late night", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["all day", 45],
                    ["late night", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 15,
        name: 'Chicago Davison',
        orientation: 'EW',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Rouge Park', 'Woodward & Manchester'],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5:02am", "9:16pm"],
                frequency: [
                    ["peak", 25],
                    ["off-peak", 60]
                ]
            },
            "Saturday": {
                service_hours: ["6:55am", "8:19pm"],
                frequency: [
                    ["all day", 45]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7:00am", "7:39pm"],
                frequency: [
                    ["all day", 45]
                ]
            }
        },
        notes: ""
    },
    {
        number: 16,
        name: 'Dexter',
        orientation: 'NS',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Rosa Parks TC', 'Providence Hospital'],
        via: ['Cass', 'West Grand Bl.', 'Dexter', 'Greenfield', 'Livernois', 'Curtis'],
        pdf: "https",
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        services: {
            "Monday-Friday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["peak", 12],
                    ["off-peak", 15],
                    ["late night", 30]
                ]
            },
            "Saturday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["all day", 30],
                    ["late night", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["all day", 30],
                    ["late night", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 17,
        name: 'Eight Mile',
        orientation: 'EW',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Mack & Moross', '7 Mile & Grand River'],
        via: ['8 Mile Road'],
        pdf: "https",
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        services: {
            "Monday-Friday": {
                service_hours: ["4:09am", "2:44am"],
                frequency: [
                    ["peak", 20],
                    ["off-peak", 30],
                    ["late night", 45],
                ]
            },
            "Saturday": {
                service_hours: ["4:51am", "1:42am"],
                frequency: [
                    ["all day", 30],
                    ["late night", 50],
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["5:45am", "11:31pm"],
                frequency: [
                    ["all day", 55],
                    ["late night", 55]
                ]
            }
        },
        notes: ""
    },
    {
        number: 18,
        name: 'Fenkell',
        orientation: 'NS',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Rosa Parks TC', 'Telegraph & Fenkell'],
        via: ['12th (northbound)/14th (southbound)', 'Fenkell'],
        pdf: "https",
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        services: {
            "Monday-Friday": {
                service_hours: ["5:10am", "11:02pm"],
                frequency: [
                    ["peak", 25],
                    ["off-peak", 45],
                    ["late night", 60]
                ]
            },
            "Saturday": {
                service_hours: ["6:00am", "10L57pm"],
                frequency: [
                    ["all day", 45],
                    ["late night", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7:41am", "8:28pm"],
                frequency: [
                    ["all day", 45],
                    ["late night", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 19,
        name: 'Fort',
        orientation: 'EW',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Rosa Parks TC', 'West Outer Drive'],
        via: ['Fort St.'],
        pdf: "https",
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        services: {
            "Monday-Friday": {
                service_hours: ["4:00am", "12:25am"],
                frequency: [
                    ["peak", 25],
                    ["off-peak", 35],
                    ["late night", 60]
                ]
            },
            "Saturday": {
                service_hours: ["5:00am", "12:28am"],
                frequency: [
                    ["all day", 40],
                    ["late night", 65]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["5:00am", "10:45pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: "On Sundays, this bus departs Rosa Parks Transit Center after a layover as Route 49-Vernor. Riders remaining on the bus through the layover may continue without using a transfer."
    },
    {
        number: 21,
        name: 'Grand River',
        orientation: 'EW',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Rosa Parks TC', 'West 7 Mile'],
        via: ['Grand River'],
        pdf: "https",
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        services: {
            "Monday-Friday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["peak", 10],
                    ["off-peak", 15],
                    ["late night", 30]
                ]
            },
            "Saturday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["all day", 20],
                    ["late night", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["all day", 30],
                    ["late night", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 22,
        name: 'Greenfield',
        orientation: 'NS',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Northland Mall', 'Fairlane Mall'],
        via: ["Greenfield Rd."],
        pdf: "https",
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        services: {
            "Monday-Friday": {
                service_hours: ["4:28am", "1:40am"],
                frequency: [
                    ["all day", 15],
                    ["late night", 60]
                ]
            },
            "Saturday": {
                service_hours: ["5:15am", "12:39am"],
                frequency: [
                    ["all day", 20],
                    ["late night", 30]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["6:05am", "10:38pm"],
                frequency: [
                    ["all day", 35],
                    ["late night", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 23,
        name: 'Hamilton',
        orientation: 'NS',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Rosa Parks TC', '8 Mile Meijer'],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5:37am", "11:23pm"],
                frequency: [
                    ["all day", 40],
                    ["late night", 60]
                ]
            },
            "Saturday": {
                service_hours: ["7:08am", "9:44pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7:08am", "8:43pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 25,
        name: 'Jefferson',
        orientation: 'EW',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Rosa Parks TC', 'Jefferson & Maryland'],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["peak", 35],
                    ["off-peak", 35]
                ]
            },
            "Saturday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["24 hours"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 27,
        name: 'Joy',
        orientation: 'EW',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Redford Plaza', 'Rosa Parks TC'],
        via: ['Lafayette', 'W. Grand Blvd.', 'Joy Rd.'],
        pdf: "https",
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        services: {
            "Monday-Friday": {
                service_hours: ["5:21am", "11:51pm"],
                frequency: [
                    ["peak", 30],
                    ["off-peak", 50],
                    ["late night", 60],
                ]
            },
            "Saturday": {
                service_hours: ["6:40am", "10:35pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7:01am", "7:51pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 29,
        name: 'Linwood',
        orientation: 'NS',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['Rosa Parks TC', 'Univ. of Detroit Mercy'],
        via: ['Trumbull', 'Linwood'],
        pdf: "https",
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        services: {
            "Monday-Friday": {
                service_hours: ["5am", "11pm"],
                frequency: [
                    ["peak", 35],
                    ["all day", 60]
                ]
            },
            "Saturday": {
                service_hours: ["7am", "11pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7am", "8pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: "On Saturdays, Sundays and weekday nights, this bus departs Rosa Parks Transit Center after a layover as Route 27-Joy. Riders remaining on the bus through the layover may continue without using a transfer."
    },
    {
        number: 30,
        name: 'Livernois',
        orientation: 'NS',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['', ''],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5am", "11pm"],
                frequency: [
                    ["peak", 35],
                    ["off-peak", 35]
                ]
            },
            "Saturday": {
                service_hours: ["7am", "11pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7am", "8pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 31,
        name: 'Mack',
        orientation: 'EW',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['', ''],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5am", "11pm"],
                frequency: [
                    ["peak", 35],
                    ["off-peak", 35]
                ]
            },
            "Saturday": {
                service_hours: ["7am", "11pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7am", "8pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 32,
        name: 'McNichols',
        orientation: 'EW',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['', ''],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5am", "11pm"],
                frequency: [
                    ["peak", 35],
                    ["off-peak", 35]
                ]
            },
            "Saturday": {
                service_hours: ["7am", "11pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7am", "8pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 34,
        name: 'Gratiot',
        orientation: 'NS',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['', ''],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5am", "11pm"],
                frequency: [
                    ["peak", 35],
                    ["off-peak", 35]
                ]
            },
            "Saturday": {
                service_hours: ["7am", "11pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7am", "8pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 37,
        name: 'Michigan',
        orientation: 'EW',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['', ''],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5am", "11pm"],
                frequency: [
                    ["peak", 35],
                    ["off-peak", 35]
                ]
            },
            "Saturday": {
                service_hours: ["7am", "11pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7am", "8pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 38,
        name: 'Plymouth',
        orientation: 'EW',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['', ''],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5am", "11pm"],
                frequency: [
                    ["peak", 35],
                    ["off-peak", 35]
                ]
            },
            "Saturday": {
                service_hours: ["7am", "11pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7am", "8pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 39,
        name: 'Puritan',
        orientation: 'EW',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['', ''],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5am", "11pm"],
                frequency: [
                    ["peak", 35],
                    ["off-peak", 35]
                ]
            },
            "Saturday": {
                service_hours: ["7am", "11pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7am", "8pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 40,
        name: 'Russell',
        orientation: 'NS',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['', ''],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5am", "11pm"],
                frequency: [
                    ["peak", 35],
                    ["off-peak", 35]
                ]
            },
            "Saturday": {
                service_hours: ["7am", "11pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7am", "8pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 41,
        name: 'Schaefer',
        orientation: 'NS',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['', ''],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5am", "11pm"],
                frequency: [
                    ["peak", 35],
                    ["off-peak", 35]
                ]
            },
            "Saturday": {
                service_hours: ["7am", "11pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7am", "8pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 42,
        name: 'Mid City Loop',
        orientation: 'CW',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['', ''],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5am", "11pm"],
                frequency: [
                    ["peak", 35],
                    ["off-peak", 35]
                ]
            },
            "Saturday": {
                service_hours: ["7am", "11pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7am", "8pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 43,
        name: 'Schoolcraft',
        orientation: 'EW',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['', ''],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5am", "11pm"],
                frequency: [
                    ["peak", 35],
                    ["off-peak", 35]
                ]
            },
            "Saturday": {
                service_hours: ["7am", "11pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7am", "8pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 45,
        name: 'Seven Mile',
        orientation: 'EW',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['', ''],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5am", "11pm"],
                frequency: [
                    ["peak", 35],
                    ["off-peak", 35]
                ]
            },
            "Saturday": {
                service_hours: ["7am", "11pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7am", "8pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 46,
        name: 'Southfield',
        orientation: 'NS',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['', ''],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5am", "11pm"],
                frequency: [
                    ["peak", 35],
                    ["off-peak", 35]
                ]
            },
            "Saturday": {
                service_hours: ["7am", "11pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7am", "8pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 47,
        name: 'Tireman',
        orientation: 'EW',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['', ''],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5am", "11pm"],
                frequency: [
                    ["peak", 35],
                    ["off-peak", 35]
                ]
            },
            "Saturday": {
                service_hours: ["7am", "11pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7am", "8pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 48,
        name: 'Van Dyke-Lafayette',
        orientation: 'NS',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['', ''],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5am", "11pm"],
                frequency: [
                    ["peak", 35],
                    ["off-peak", 35]
                ]
            },
            "Saturday": {
                service_hours: ["7am", "11pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7am", "8pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: "On weekday and Saturday nights, this bus departs Rosa Parks Transit Center after a layover as Route 25-Jefferson. Riders remaining on the bus through the layover may continue without using a transfer."
    },
    {
        number: 49,
        name: 'Vernor',
        orientation: 'EW',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['', ''],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5:07am", "1:45am"],
                frequency: [
                    ["Peak", 35],
                    ["Off-Peak", 35]
                ]
            },
            "Saturday": {
                service_hours: ["7am", "11pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7am", "8pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: "On Sundays, this bus departs Rosa Parks Transit Center after a layover as Route 19-Fort. Riders remaining on the bus through the layover may continue without using a transfer."
    },
    {
        number: 53,
        name: 'Woodward',
        orientation: 'NS',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['', ''],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5am", "11pm"],
                frequency: [
                    ["peak", 35],
                    ["off-peak", 35]
                ]
            },
            "Saturday": {
                service_hours: ["7am", "11pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7am", "8pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 54,
        name: 'Wyoming',
        orientation: 'NS',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['', ''],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5am", "11pm"],
                frequency: [
                    ["peak", 35],
                    ["off-peak", 35]
                ]
            },
            "Saturday": {
                service_hours: ["7am", "11pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7am", "8pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        frequency: [
            ['Monday-Friday', 'peak', 60],
            ['Monday-Friday', 'off-peak', 60],
            ['Saturday-Sunday', 'all day', 60]
        ],
        service_hours: {
            'Monday-Friday': ['6am', '11pm'],
            'Saturday': ['8am', '8pm'],
            'Sunday': ['10am', '8pm']
        },
        notes: ""
    },
    {
        number: 60,
        name: 'Evergreen',
        orientation: 'NS',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['', ''],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5am", "11pm"],
                frequency: [
                    ["peak", 35],
                    ["off-peak", 35]
                ]
            },
            "Saturday": {
                service_hours: ["7am", "11pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7am", "8pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 80,
        name: 'Villages Direct',
        orientation: 'EW',
        downtown: true,
        days_per_week: ['Monday', 'Sunday'],
        between: ['', ''],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5am", "11pm"],
                frequency: [
                    ["peak", 35],
                    ["off-peak", 35]
                ]
            },
            "Saturday": {
                service_hours: ["7am", "11pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7am", "8pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 89,
        name: 'Southwest Direct',
        orientation: 'NS',
        downtown: false,
        days_per_week: ['Monday', 'Sunday'],
        between: ['', ''],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5am", "11pm"],
                frequency: [
                    ["peak", 35],
                    ["off-peak", 35]
                ]
            },
            "Saturday": {
                service_hours: ["7am", "11pm"],
                frequency: [
                    ["all day", 60]
                ]
            },
            "Sunday/Holiday": {
                service_hours: ["7am", "8pm"],
                frequency: [
                    ["all day", 60]
                ]
            }
        },
        notes: ""
    },
    {
        number: 92,
        name: 'Rosedale Express',
        orientation: 'EW',
        downtown: true,
        days_per_week: ['Monday', 'Friday'],
        between: ['', ''],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5am", "11pm"],
                frequency: [
                    ["peak", 35],
                    ["off-peak", 35]
                ]
            }
        },
        notes: ""
    },
    {
        number: 95,
        name: 'Ryan Express',
        orientation: 'NS',
        downtown: true,
        days_per_week: ['Monday', 'Friday'],
        between: ['', ''],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5am", "11pm"],
                frequency: [
                    ["peak", 35],
                    ["off-peak", 35]
                ]
            }
        },
        notes: ""
    },
    {
        number: 96,
        name: 'Joy Express',
        orientation: 'EW',
        downtown: true,
        days_per_week: ['Monday', 'Friday'],
        between: ['', ''],
        via: [''],
        description: "Duis lacinia magna id lorem rhoncus, ac volutpat lacus pellentesque. Ut vel facilisis nunc, vitae euismod purus. Vestibulum ultrices nec erat eget mollis. Proin placerat id mauris eget viverra.",
        pdf: "https",
        services: {
            "Monday-Friday": {
                service_hours: ["5am", "11pm"],
                frequency: [
                    ["peak", 35],
                    ["off-peak", 35]
                ]
            }
        },
        notes: ""
    }
]

export default routeDetails;
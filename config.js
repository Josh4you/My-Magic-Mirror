/* Magic Mirror Config Sample
/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,

	language: 'en',
	timeFormat: 12,
	units: 'metric',

	modules: [
    {
        module: 'aiclient',
        position: 'middle_center' // This can be any of the regions.
    },
    
    {
    	module: 'aiclientdebugger',
    	position: 'middle_center'
    },
	{
		module: "clock",
		position: "top_left"
	},

	{
        module: "compliments",
        position: "bottom_bar",    // This can be any of the regions.
                                    // Best results in one of the middle regions like: lower_third
        config: {
            // The config property is optional.
            // If no config is set, the default compliments are shown.
            // See 'Configuration options' for more information.
            fadeSpeed:2000,
            compliments:{
                day_sunny:[
                "today is a sunnyday.Better wear your sunscreen lotion",
                "It's a beautiful day"],
                rain:["Dont forget your umbrella"],
                night_clear:["Its a brezze night"],
                cloudy:["Clouds ,Clouds all around"],
                anytime:[           
                         "Hey there Handsome!"
                        ],
        morning: [
            "Good morning, handsome!",
            "Enjoy your day!",
            "How was your sleep?"
        ],
        afternoon: [
            "Hello, beauty!",
            "You look Awesome!",
            "Looking good today!",
            "Hitting your stride!",
        "You are making a difference!",
        "You're more fun than bubble wrap!"
        ],
        evening:[
            "Wow, you look hot!",
            "You look nice!",
            "Hi, Handsome!",
             "You made someone smile today, I know it.",
        "You are making a difference.",
        "The day was better for your efforts."
        ]
            }
        }
    },
		
	{
			module: "calendar",
			header: "Indian Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "http://www.officeholidays.com/ics/ics_country_noregion.php?tbl_country=India"
					}
					

				]
			}
	},		
		
        {
			module: "currentweather",
			position: "top_right",
			config: {
				
                location: "Bhubaneshwar,India",
				locationID: "1275817",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "ca15073f20f10f8945dddd175c4b3c4e",
				degreeLabel:"Metric",
            iconTable: {
                        '01d': 'wi-day-sunny',
                        '02d': 'wi-day-cloudy',
                        '03d': 'wi-cloudy',
                        '04d': 'wi-cloudy-windy',
                        '09d': 'wi-showers',
                        '10d': 'wi-rain',
                        '11d': 'wi-thunderstorm',
                        '13d': 'wi-snow',
                        '50d': 'wi-fog',
                        '01n': 'wi-night-clear',
                        '02n': 'wi-night-cloudy',
                        '03n': 'wi-night-cloudy',
                        '04n': 'wi-night-cloudy',
                        '09n': 'wi-night-showers',
                        '10n': 'wi-night-rain',
                        '11n': 'wi-night-thunderstorm',
                        '13n': 'wi-night-snow',
                        '50n': 'wi-night-alt-cloudy-windy'
                        }
			}
		},
		

        {
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Bhubaneshwar,India",
				locationID: "1275817",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "ca15073f20f10f8945dddd175c4b3c4e",
				            degreeLabel:"Metric"

			}
		},

		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Hindustan Times",
						url: "http://www.hindustantimes.com/rss/topnews/rssfeed.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},

	  {
	    module: "MMM-bitcoin",
	    position: 'bottom_right',
	    config: {
	      fiat: 'usd',          // 'usd' and 'eur' available, defaults to 'usd'
	      showBefore: 'Bitstamp',    // will display before the bitcoin price, default 'Bitstamp'
	      updateInterval: 60000 // update interval in milliseconds
	    }
  },

	{
			module: 'email',
                position: 'bottom_left',
                header: 'Email',
                config: {
                    accounts: [
                        {
                            user: 'joshuashibu4@gmail.com',
                            password: 'Jesusinall23@#',
                            host: 'imap.gmail.com',
                            port: 993,
                            tls: true,
                            ssl:true,
                            authTimeout: 10000,
                            numberOfEmails:3,

                        },
                        
                    ],
                    fade: true,
                    maxCharacters: 30
                }
	},
	{
		module: 'mmm-systemtemperature',
		position: 'bottom_right',	// This can be any of the regions.
		classes: 'small dimmed', // Add your own styling. Optional.
		config: {
			// See 'Configuration options' for more information.
		
				prependString:'The System Temprature is:',
				updateInterval:5000,
				animationSpeed:0,
				unit:'c'


		}
	},
	{
        module: "helloworld",
        position:"top_center", // This can be any of the regions.
        config:{
            // See 'Configuration options' for more information.
            text: "Magic Mirror by Joshua Shibu",
        }
    },
	

	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}

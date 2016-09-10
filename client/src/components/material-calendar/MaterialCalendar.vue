<style lang="scss">
.material-calendar{
	max-width: 700px;
	.capitalize{
		text-transform: capitalize;
	}
	.date-name{
		text-transform: capitalize;
	}
	.month-nav{
		background-color : #00A8D6;
		min-height: 50px;
		color:white;
		padding: 10px;
		text-transform: capitalize;
		>.material-icons{
			line-height: 30px;
		}
		.date-name{
			margin-left:10px;
			line-height: 30px;
		}
		div{
			display: inline-block;
		}
		.month-year{
			min-width: 250px;
			max-width: 250px;
		}
		.calendar-controls{
			button{
				background-color: transparent;
				border: 0;
				border-radius: 500px;
				.material-icons{
					line-height: 31px;
				}
				&:hover{
					background-color: rgba(0,0,0,0.2);
				}
			}
		}
	}

	.mc-calendar-container{
		display: flex;
		width: 100%;
		.mc-calendar{
			padding: 10px;
			background-color : #00A8D6;
			color:white;
			width: 100%;
			.day-container{
				margin: 0 auto;
				.day{
					width: 14.2857143%;
					display: inline-block;
					text-align: center;
					cursor: pointer;
					height: 17.6666%;
					padding: 0;
					overflow: outside;
					font-size: 13px;
					line-height: 37px;
					color: #ddd;
					background-color : #00A8D6;
					-webkit-touch-callout: none; /* iOS Safari */
					-webkit-user-select: none;   /* Chrome/Safari/Opera */
					-khtml-user-select: none;    /* Konqueror */
					-moz-user-select: none;      /* Firefox */
					-ms-user-select: none;       /* IE/Edge */
					user-select: none;
					position: relative;
					.events-quantity{
						position:absolute;
						bottom:5px;
						z-index: 1;
						left:50%;
						right: 0;
						width:1px;
						height: 1px;
						color:red;
						background-color: #E53935;
						box-shadow: 1px 1px 0px 1px #E53935;
					}
					&:hover{
						border-radius: 5px;
						background-color: rgba(255,255,255,0.5);
						color:#333;
						.events-quantity{
							font-weight: bold;
						}
					}
				}
				.passive{
					color: #909090;
				}
			}
			.week{
				margin-top: -10px;
				ul{
					li{
						text-align: center;
						font-size: 12px;
						color: #dfdfef;
						width: 14.2857143%;
						//width: 13.18%;
						display: inline-block;
						font-weight: 600;
						text-transform: uppercase;
					}
				}
			}
			.calendar-controls{
				background-color : #00A8D6;
				height: 36px;
				width: 100%;
				position: relative;
				.next,.previous{
					position: absolute;
					background-color: transparent;
					padding: 5px;
					&:hover{
						background-color: #00A8f0;
					}
				}
				.next{
					right : 10px;
					border: 0;
				}
				.previous{
					left: 10px;
					border: 0;
				}
			}
		}
		.mc-events{
			padding: 10px;
			width: 100%;
			padding-bottom: 0;
			background-color: #fff;
			position: relative;
			display: inline-block;
			.add-event{
				position: absolute;
				right:1em;
				top: - 1.5em;
				border: 0;
				color: white;
				width: 50px;
				height: 50px;
				line-height: 10px;
				border-radius: 500px;
			}
			h4{
				font-weight:500;
				margin: 0;
			}
			h5{
				margin: 0;
				font-size: 1.2em;
				color: #777;
			}
			hr{
				border: 0.5px solid #eef;
			}
			
			.event-list{
				margin: 5px -10px;
				max-height: 210px;
				overflow-x: auto;
				padding: 0 5px;
				.event-card{
					border-left: 5px solid #E53935;
					padding: 5px 10px;
					margin-bottom: 15px;
					h3{
						font-size: 1.2em;
						font-weight: 600;
					}
					h4{
						font-size: 1.1em;
					}
					p{
						margin: 0;
						font-size: 0.8em;
					}
				}
			}
			.no-events-today{
				padding: 24px;
				text-align: center;
				align-items: center;
				justify-content: center;
				display: -webkit-box;    
				display: -moz-box;         
				display: -ms-flexbox;      
				display: -webkit-flex;     
				display: flex; 
				flex-wrap : wrap;
				flex-direction: column;
				color: #777;
				.material-icons{
					font-size: 45px;
				}
				p{
					font-size: 1.1em;
				}
			}
		}
		
	}

}
@media (max-width:698px){
	.material-calendar{
		max-width: 500px;
		.calendar-controls{
			float:right;
		}
		.mc-calendar-container{
			flex-direction: column;
		}
		.add-event{
			top: -26px!important;
		}
	}
}

@media (max-width:320px){
	.material-calendar{
		.month-nav{
			.month-year{
				min-width: 199px;
				max-width: 199px;
			}
		}
	}
}
</style>
<template>
	<div class="material-calendar z-depth-1">
			<div class="month-nav">
				<div class="month-year">
					<span class="material-icons left">insert_invitation</span>
					<span class="date-name capitalize">{{ calculateCurrentDateName}}</span>
				</div>
				<div class="calendar-controls">
					<button class="previous" @click="nextPrevMonth('prev')"> 
						<span class="material-icons">expand_less</span>
					</button>
					<button class="next" @click="nextPrevMonth('next')">
						<span class="material-icons">expand_more</span>
					</button>
				</div>
			</div>
		<div class="mc-calendar-container">
			<div class="mc-calendar">
				<div class="hide calendar-controls">
					<button class="previous  waves-effect waves-light" @click="nextPrevMonth('prev')"> 
						<span class="material-icons">arrow_back</span>
					</button>
					<button class="next  waves-effect waves-light" @click="nextPrevMonth('next')">
						<span class="material-icons">arrow_forward</span>
					</button>
				</div>
				<div class="week">
					<ul>
						<li v-for="wday in weekDays">{{wday | headerCalendarDay }}</li>
					</ul>
				</div>
				<div class="day-container">
					<div class="day" @click="selectDay(day.date)" :id="day.date" :class="{'passive' : !(day.inMonth)}" v-for="day in dayList">
						{{day.value}}
						<div class="events-quantity hide"></div>
					</div>
					
					<!-- <div class="day">
						3
					</div> -->
					
				</div>
				</ul>
			</div>
			<div class="mc-events">
				<h4 class="date capitalize">
					{{calculateDayAndMonth}}
				</h4>
				<h5 class="week-day capitalize">
					{{calculateWeekDay}}
				</h5>
				<hr>
				<div class="event-list" v-if="selectedEventList.length > 0">
					<div class="event-card z-depth-1" v-for="event in selectedEventList">
						<h3>{{event.name}}</h3>
						<h4>{{event.location}}</h4>
						<p>
							{{event.description}}
						</p>
					</div>
				</div>
				<div class="no-events-today" v-else>
					<span class="material-icons">
					notifications
					</span>
					<p>
						No hay eventos para el día de hoy
					</p>
				</div>

				<button class="add-event  waves-effect waves-light red z-depth-1">
					<span class="material-icons">add</span>
				</button>
			</div>
		</div>
	</div>
</template>
<script>	
  export default {
    data() {
      return{
      	weekDay : null,
      	daysInMonth : null,
      	startsOnSunday : true,
      	currentDate : null,
      	weekDays : ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'],
      	dayList : [],
      	selectedDate : null,
      	eventList : [
      		{
      			name : "evento de ejemplo",
      			start_date : "2016-07-08 12:00:00",
      			end_date : "2016-07-08 16:00:00",
      			description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos excepturi dicta suscipit illum, reiciendis cupiditate pariatur nisi rerum aspernatur repellat adipisci debitis delectus, consequuntur, sint asperiores ipsam iste eos. Similique?"
      		},
      		{
      			name : "Cuadrangular meetup",
      			start_date : "2016-09-17 14:00:00",
      			end_date : "2016-08-10 19:00:00",
      			description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eos accusantium, cumque impedit ea sapiente libero consectetur autem officia? Odio nobis mollitia rerum, nesciunt accusamus voluptates dolor vero molestias nulla."
      		},
      		{
      			name : "Cuadrangular meetup",
      			start_date : "2016-07-29 14:00:00",
      			end_date : "2016-08-07 19:00:00",
      			description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eos accusantium, cumque impedit ea sapiente libero consectetur autem officia? Odio nobis mollitia rerum, nesciunt accusamus voluptates dolor vero molestias nulla."
      		},
      		{
      			name : "evento de ejemplo",
      			start_date : "2016-07-01 12:00:00",
      			end_date : "2016-07-10 16:00:00",
      			description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos excepturi dicta suscipit illum, reiciendis cupiditate pariatur nisi rerum aspernatur repellat adipisci debitis delectus, consequuntur, sint asperiores ipsam iste eos. Similique?"
      		},
      		{
      			name : "Cuadrangular meetup",
      			start_date : "2016-08-10 14:00:00",
      			end_date : "2016-08-10 19:00:00",
      			description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eos accusantium, cumque impedit ea sapiente libero consectetur autem officia? Odio nobis mollitia rerum, nesciunt accusamus voluptates dolor vero molestias nulla."
      		},
      		{
      			name : "Cuadrangular meetup",
      			start_date : "2016-07-10 14:00:00",
      			end_date : "2016-08-07 19:00:00",
      			description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eos accusantium, cumque impedit ea sapiente libero consectetur autem officia? Odio nobis mollitia rerum, nesciunt accusamus voluptates dolor vero molestias nulla."
      		}
      	],
      	selectedEventList : []
      }
    },
    methods :{
    	setDate(newDate){
    		this.currentDate = this.$moment(newDate);
    	},
    	setSelectedDate(newDate){
    		this.selectedDate = this.$moment(newDate);
    	},
    	printEventsInCalendar(){
    		var self = this;
    		var m = this.$moment;
    		self.eventList.forEach((event)=>{
    			var date = m(event.start_date).format('YYYY-MM-DD');
    			var query = '#'+date;
    			var a = $(query).find('.events-quantity').removeClass('hide');
    		});
    		this.printTodayInCalendar();

    		setTimeout(function(){
    			this.selectDay(m().format('YYYY-MM-DD'));
    		}.bind(this),0)
    	},
    	printTodayInCalendar(){
    		var date = this.$moment().format('YYYY-MM-DD');
    		$("#"+date).addClass('indigo').css('border-radius','3px');
    	},
    	fillDays(){
			var moment = this.$moment;
			this.daysInMonth = this.currentDate.daysInMonth();

			let days = []
	        let firstDay = moment(this.currentDate).date(1).day();
	        //gettting previous and next month
	        let currentMonth = this.currentDate.clone();
	        let previousMonth = this.currentDate.clone();
	        let nextMonth = this.currentDate.clone();

	        nextMonth.add(1,'months');
	        previousMonth.subtract(1,'months');

	        let monthDays = moment(this.currentDate).daysInMonth()
	        for (let i = 1; i <= monthDays; ++i) {
	        	let _date = currentMonth.clone();
	          days.push({
	            value: i,
	            inMonth: true,
	            unavailable: false,
	            checked: false,
	            date : moment(_date).date(i).format('YYYY-MM-DD')

	          })
	        }

	        for (let i = 0; i < firstDay - (this.startsOnSunday? 1 : 0); i++) {
	            let _date = previousMonth.clone()
	            let passiveDay = {
	              value: previousMonth.daysInMonth() - (i),
	              inMonth: false,
	              action : 'previous',
	              unavailable : false,
	              checked : false,
	              date : moment(_date).date(previousMonth.daysInMonth() - (i)).format('YYYY-MM-DD')
	            }
	            days.unshift(passiveDay);
	        }
	        var passiveDaysAtFinal = 41 - days.length;

	        for (let i = 1; i <= passiveDaysAtFinal; i++) {
	        	let _date = nextMonth.clone()
	            let passiveDay = {
	              value: i,   
	              inMonth: false,
	              action : 'next',
	              unavailable : false,
	              checked : false,
	              date : moment(_date).date(i).format('YYYY-MM-DD')

	            }
	            days.push(passiveDay);
	        }
	        this.dayList = days;
	        setTimeout(function(){
    			this.printEventsInCalendar();
	        }.bind(this),0)

    	},
    	nextPrevMonth(nextPrev){
    		if(nextPrev == 'next'){
    			this.currentDate = this.$moment(this.currentDate).add(1,'months');
    		}else{
    			this.currentDate = this.$moment(this.currentDate).subtract(1,'months');
    		}
    		this.fillDays();
    	},
    	selectDay(date){
    		var moment = this.$moment;
    		this.setSelectedDate(date);
    		this.findEventByDate(date);
    	},
    	findEventByDate(date){
    		var events = [];
    		var m = this.$moment;
    		var reg = 'YYYY-MM-DD'
    		this.eventList.forEach((event)=>{
    			if(m(event.start_date).format(reg) == date){
    				events.push(event);
    			}
    		});
    		this.selectedEventList = events;
    	},
    },
    computed : {
    	calculateCurrentDateName(){
    		if(this.currentDate){
					return this.currentDate.format('MMMM YYYY')
    		}
    	},
    	calculateDayAndMonth(){
    		if(this.selectedDate){
    			return this.selectedDate.format('DD MMMM')
    		}
    	},
    	calculateWeekDay(){
    		if(this.selectedDate){
    			return this.selectedDate.format('dddd')
    		}
    	},
    },
    filters : {
    	headerCalendarDay(weekDay){
    		if(weekDay){
    			return weekDay.substring(0,3);
    		}
    	},

    	currentDateName(date){
    		if(date){
    				return date.format('DD MMMM YYYY')
		    		}
    	},
    	dayAndMonth(date){
    		if(date){
    			return date.format('DD MMMM')
    		}
    	},
    	weekDay(date){
    		if(date){
    			return date.format('dddd')
    		}
    	},
    	isoWeekday(date){
    		if(date){
    			return date.format('ddd')
    		}
    	}
    },
    ready(){
    	var self = this;
    	self.currentDate = this.$moment();
    	if(this.startOnSunday){
    		var last = self.weekDays.pop();
    		self.weekDays.unshift(last);
    	}

    	self.selectedDate = this.$moment();

    	self.fillDays();

    	
    },
    watch: {
      
    }
  }
</script>

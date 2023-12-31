import { Component, OnDestroy, OnInit } from "@angular/core";
import { faArrowUpRightFromSquare, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { trigger, transition, style, animate } from '@angular/animations';
import { ThemeService } from "../services/theme.service";
import { Subscription } from 'rxjs';
@Component ({
    selector: 'app-work',
    templateUrl: './work.component.html',
    animations: [
        trigger('fadeIn', [
          transition(':enter', [
            style({ opacity: 0 }),
            animate('800ms', style({ opacity: 1 })),
          ]),
        ]),
      ],
})

export class WorkComponent implements OnInit, OnDestroy {
    arrowUp = faArrowUpRightFromSquare
    chevron = faChevronDown
    selectedTab: string = 'overview';
    darkMode = false;
    themeSubscription: Subscription = new Subscription();
    showContent = false;

    constructor(private themeService: ThemeService) {}

    ngOnInit() {
      this.themeSubscription = this.themeService.getThemeUpdates().subscribe((theme) => {
        this.darkMode = theme === 'dark';
      });
    }

    ngOnDestroy() {
      this.themeSubscription.unsubscribe();
    }

    toggleDarkMode(event: any) {
      this.darkMode = event.target.checked;
    }

    battleOptions = {
      title: 'BattleOptions',
      type: 'Full-Stack Development',
      desc: 'This project aimed to revamp an outdated, spreadsheet-based contest by introducing an automated, user-friendly platform. This new system streamlined data access for faster, more informed decision-making and added a live leaderboard to inject a competitive edge. The result was a surge in user engagement and the generation of new business leads. In short, the project turned a tedious manual process into a dynamic, real-time experience, enhancing operational efficiency and creating new opportunities for business growth.',
      stack: 'Spring Boot | Java | React | Postgres | Tailwind',
      link: 'https://contest.stratalerts.com/'
    }

    overview = {
      title: 'Project Overview',
      problem: 'A manual, Excel-based options chain contest was complex and inefficient, making data retrieval difficult and slowing decision-making processes. The lack of interactive elements and incentives led to low user engagement.',
      objective: 'To automate the contest and make it real-time, with up-to-date, high-quality data, improved decision-making accuracy, and enhanced operational efficiency. An additional goal was to boost user interaction, foster user commitment, and generate business leads.',
      method: 'Develop a software solution to replace the Excel spreadsheet, incorporating a custom search tool for efficient data retrieval. The new platform was designed to deliver real-time results and featured a dynamic leaderboard to promote competition and user engagement.',
      implementation: 'Used advanced coding techniques to build the automated platform. The custom search tool was implemented, significantly streamlining data retrieval and decision-making. A live leaderboard was added to foster competition and incentivize long-term commitment.',
      result: 'The transition from a manual, Excel-based system to a real-time platform significantly improved operational efficiency and decision-making accuracy. The leaderboard sparked user engagement and has been successful in generating business leads.',
      conclusion: 'This software engineering project effectively solved a complex problem, transforming a manual process into an automated one, boosting operational efficiency, enhancing decision-making, and fostering business development.'
    }

    overviewItems = [
      {title:'Problem', content: this.overview.problem },
      {title:'Objective', content: this.overview.objective },
      {title:'Method', content: this.overview.method },
      {title:'Implementation', content: this.overview.implementation },
      {title:'Result', content: this.overview.result },
      {title:'Conclusion', content: this.overview.conclusion }
    ]

    lesson = {
      title: 'Lessons Learned',
      test: 'The development process highlighted the value of an iterative approach, where feedback and testing play a key role. By building, testing, and refining in cycles, the final product was more robust and effective.',
      uxui: 'User interaction and engagement can be significantly improved by effective user interface and user experience design. The adoption of a dynamic leaderboard serves as an excellent example of this, promoting competition and commitment amongst users.',
      auto: 'Transitioning from a manual to an automated system demonstrated the immense potential of automation in enhancing operational efficiency and accuracy. It reiterated that automation should be a priority in areas of high-frequency, repetitive tasks, or complex calculations.',
      data: 'Recognizing the importance of efficient data retrieval and the role it plays in decision-making. The custom search tool dramatically improved data accessibility, expediting the decision-making process.',
      impact: 'The project served as a vivid reminder of the transformative potential of automation, showcasing how manual tasks can be made more efficient, thus freeing up resources for other important work.',
      conclusion: 'This experience has significantly contributed to my professional growth as a software engineer, underlining the importance of user-centered design, rigorous testing, efficient problem-solving, and effective project management.'
    }

    lessonItems = [
      {title:'Iterative Development and Testing', content: this.lesson.test },
      {title:'Importance of UI/UX', content: this.lesson.uxui },
      {title:'Automation Efficiency', content: this.lesson.auto },
      {title:'Data Accessibility', content: this.lesson.data },
      {title:'The impact of automation on productivity', content: this.lesson.impact },
      {title:'Conclusion', content: this.lesson.conclusion }
    ]

}

import { nanoid } from 'nanoid'

import {
  Blockquote,
  ContentSection,
  Education,
  PageFooter,
  PageHeader,
  WorkExperience,
} from './components'

const myWorkExperience = [
  {
    title: 'Fullstack engineer',
    company: 'Coolish Company',
    startYear: '2018',
    endYear: '2020',
    location: 'Stockholm, Sweden',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consectetur, cum doloremque error, ex exercitationem magni nihil quas repudiandae sapiente veritatis vero voluptatum. Cupiditate, quod, repellat. Aspernatur assumenda facilis, fugiat illo impedit ipsam maiores maxime qui quia soluta veniam voluptas.',
  },
  {
    title: 'Frontend developer',
    company: 'Zebra startup',
    startYear: '2016',
    endYear: '2018',
    location: 'Copenhagen, Denmark',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consectetur, cum doloremque error, ex exercitationem magni nihil quas repudiandae sapiente veritatis vero voluptatum. Cupiditate, quod, repellat. Aspernatur assumenda facilis, fugiat illo impedit ipsam maiores maxime qui quia soluta veniam voluptas.',
  },
  {
    title: 'Frontend intern',
    company: 'Tiny NGO thing',
    startYear: '2015',
    endYear: '2016',
    location: 'Gothenburg, Sweden',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consectetur, cum doloremque error, ex exercitationem magni nihil quas repudiandae sapiente veritatis vero voluptatum. Cupiditate, quod, repellat. Aspernatur assumenda facilis, fugiat illo impedit ipsam maiores maxime qui quia soluta veniam voluptas.',
  },
]

const myDegrees = [
  {
    name: 'Software Engineering BSc',
    organisation: 'University of Gothenburg',
    graduationYear: '2015',
  },
  {
    name: 'Highschool diploma',
    organisation: 'Some highschool',
    graduationYear: '2012',
  },
]

const myRecommendations = [
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consectetur, cum doloremque error, ex exercitationem magni nihil quas repudiandae sapiente veritatis vero voluptatum. Cupiditate, quod, repellat. Aspernatur assumenda facilis, fugiat illo impedit ipsam maiores maxime qui quia soluta veniam voluptas.',
    cite: 'My BFF',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consectetur, cum doloremque error, ex exercitationem magni nihil quas repudiandae sapiente veritatis vero voluptatum. Cupiditate, quod, repellat. Aspernatur assumenda facilis, fugiat illo impedit ipsam maiores maxime qui quia soluta veniam voluptas.',
    cite: 'A previous employer',
  },

  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consectetur, cum doloremque error, ex exercitationem magni nihil quas repudiandae sapiente veritatis vero voluptatum. Cupiditate, quod, repellat. Aspernatur assumenda facilis, fugiat illo impedit ipsam maiores maxime qui quia soluta veniam voluptas.',
    cite: 'My neighbours hamster',
  },
]

function App() {
  return (
    <div className={'grid gap-12 md:container md:mx-auto md:max-w-screen-sm'}>
      <PageHeader />

      <ContentSection heading={'Work experience'}>
        <ul>
          {myWorkExperience.map(experience => (
            <li key={nanoid()}>
              <WorkExperience
                jobTitle={experience.title}
                company={experience.company}
                startYear={experience.startYear}
                endYear={experience.endYear}
                location={experience.location}
                summary={experience.summary}
              />
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection heading={'Education'}>
        {myDegrees.map(degree => (
          <Education
            key={nanoid()}
            degreeName={degree.name}
            organisation={degree.organisation}
            graduationYear={degree.graduationYear}
          />
        ))}
      </ContentSection>

      <ContentSection heading={'Recommendations'}>
        {myRecommendations.map(reference => (
          <Blockquote quote={reference.quote} cite={reference.cite} />
        ))}
      </ContentSection>
      <PageFooter />
    </div>
  )
}

export default App

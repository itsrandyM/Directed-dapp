import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const stories: NextPage = () => {
	return (
		<>
			<Head>
				<title>{'Student Stories'}</title>
			</Head>
			<main className='container grid grid-cols-1 gap-10 py-8  justify-items-center'>
				<div className='max-w-sm rounded overflow-hidden shadow-lg'>
					<div className='px-6 py-4 justify-items-center'>
						<div className='font-bold text-xl mb-2'>The Story of Ligaro</div>
						<p className='text-gray-700 text-base'>
							This is Ligaro, a courageous leader with a not-so-courageous
							background. Having ruled the kingdom of Timua for fifty-five
							years, his backstory would nearly be forgotten if it were not for
							this brief biography. At the tender age of fifteen, his father,
							the leader of the Kingdom of Timua, suddenly died of a mysterious
							illness that has never been known. Since the monarchy was
							hereditary he, being the first born son, was to take charge
							immediately. However, contrary to his father, he was a timid and
							rather shy creature, with absolutely zero leadership skills.
							Because of this, a neighboring village that had been yearning to
							attack the Kingdom of Timua but had failed to do so before, took
							this advantage. They wreaked havoc and distraction. It was this
							time when Lingaro was a witness of the murder of his relatives.
							The cold blood of his relatives catalyzed his cowardice and
							eventually led to him running away. However, a guard of the castle
							noted his disappearance and using Ligaro’s footsteps managed to
							trace him in remote Vale. Lingaro refused to go back to the castle
							where he had lived, claiming he was not fit for the throne.
							However the guard knew it was high time to reveal a long-running
							secret in the royal family’s blood: the shield sovereignty. This
							was a shield that was bestowed upon any new leader and which had
							magic from the ancestors that enabled the shield to rule with
							fairness. It had three badges; one on the left for courage, one on
							the right for loyalty and one on the center for leadership. With
							this, the guard confirmed Ligaro to go back to the castle. As soon
							as the shield was on Ligaro’s body, he left a sudden Aura of
							authority. This was it; a new era had begun. Ligaro was Timua’s
							new ruler and all other kingdoms had to mind their own business or
							face the music. These series of events may be lost and found in a
							distant land, long after Ligaro’s reign, but it shall serve as a
							reminder that there once was a great leader named Ligaro with a
							not-so-great backstory..{' '}
						</p>
					</div>
				</div>
			</main>
		</>
	)
}

export default stories

import { useState, useEffect } from 'react'
import { useWallet, useAssets } from '@meshsdk/react'
import { AssetCard, Meta } from '../../components'
import { data } from '../../data/royal'
import Image from 'next/image'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Home() {
	const [nfts, setNfts] = useState<{ [key: string]: any }>({})
	const [hasPolicyIdAssetsChecked, setHasPolicyIdAssetsChecked] =
		useState<boolean>(false)

	const { connected, wallet } = useWallet()
	const assets: any = useAssets()
	const router = useRouter()
	const params = router.pathname.split('/')[2]

	console.log(params)

	useEffect(() => {
		const getNfts = async () => {
			try {
				const res = await axios.post(
					'https://app.directed.dev/api/transactions',
					{ params: params }
				)
				const mergeRes = [].concat(...res.data)
				setNfts(mergeRes)
			} catch (err) {
				console.log(err)
			}
		}
		getNfts()
	}, [])

	return (
		<>
			<Meta title='Heroes NFTS' description='DirectEd Royal NFTs' />
			<main className='nft-assets'>
				<div className='nft-assets'></div>
				<>
					<h3>Pick which Hero you’d like</h3>
					<div className='nft-assets__singlenfts'>
						{nfts.length > 0 &&
							nfts.map((item: any) => {
								return (
									<a
										target='_blank'
										key={item.id}
										href={item.paymentGatewayLinkForSpecificSale}
									>
										<img
											src={`https://ipfs.io/ipfs/${
												item.ipfsLink.split('/')[2]
											}`}
											alt={item.title}
											width={200}
											height={200}
										/>
									</a>
								)
							})}
					</div>
				</>
			</main>
		</>
	)
}

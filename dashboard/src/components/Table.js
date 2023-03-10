import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { supabase } from '../supabaseClient'

const Table = () => {
	const [detection, setDetection] = useState('');

	useEffect(() => {
		async function fetchDetection() {
			const { data, error } = await supabase
				.from("Detection")
				.select("*, Weapon(name), Camera(location)")
				.limit(10)
				.eq("detection_type", "2")
			if (error) {
				console.log(error)
			}
			setDetection(data)
			console.log(data)
		}
		fetchDetection()
	}, [])

  return (
    <div className="detectionTable">
        { detection && detection.map((item) => (
					<Card key={item.id} data={item} />
				))}
    </div>
  )
}

export default Table
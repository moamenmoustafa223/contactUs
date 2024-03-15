import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getVendor } from "../api"

export default function VendorPage() {
    const { id } = useParams()
    const [vendor, setVendor] = useEffect(null)
    useEffect(() => {
        const setData = async () => {
            const vendor = await getVendor(id)
            setVendor(vendor)
        }
        setData().catch((err) => console.log(err))
    }, [])
    return (
        <div>
            {
                vendor ? (
                    <h1>Vendor {vendor.id}</h1>

                ) : (
                    <h1>Vendor not found</h1>
                )
            }
        </div>
    )
}
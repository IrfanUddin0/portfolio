import { Button } from 'react-bootstrap'

export default function ContactButton() {
    return (
        <Button href='mailto:irfanniddu@gmail.com' variant="primary" style={{ width: '70px', height: '50px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-envelope"  width="15" height="15" viewBox="-0.03 2 16.03 12">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
            </svg> Contact
        </Button>
    )
}
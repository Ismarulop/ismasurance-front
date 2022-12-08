import './ClaimsScreen.css';

function ClaimScreen() {
    const claims = [
        {
            "clnClaim": "1",
            "policy": "0097",
            "handler": "Jhon Doe",
            "claimDate": new Date()
        },
        {
            "clnClaim": "1",
            "policy": "0097",
            "handler": "Jhon Doe",
            "claimDate": new Date()
        },
        {
            "clnClaim": "1",
            "policy": "0097",
            "handler": "Jhon Doe",
            "claimDate": new Date()
        },
        {
            "clnClaim": "1",
            "policy": "0097",
            "handler": "Jhon Doe",
            "claimDate": new Date()
        }
    ];

    return (
        <div className='claim-screen'>
            <ol className='header-claim-screen'>
                <li>Claim</li>
                <li>Policy</li>
                <li>Handler</li>
                <li>Claim Date</li>
            </ol>

            <ol className='claims-list'>
                <li> {claims[0].clnClaim}</li>
                <li>{claims[1].policy}</li>
                <li>{claims[2].handler}</li>
                <li>{claims[3].claimDate.toISOString()}</li>
            </ol>
            <ol className='claims-list'>
                <li> {claims[0].clnClaim}</li>
                <li>{claims[1].policy}</li>
                <li>{claims[2].handler}</li>
                <li>{claims[3].claimDate.toISOString()}</li>
            </ol>
            <ol className='claims-list'>
                <li> {claims[0].clnClaim}</li>
                <li>{claims[1].policy}</li>
                <li>{claims[2].handler}</li>
                <li>{claims[3].claimDate.toISOString()}</li>
            </ol>
        </div>
    );

}

export default ClaimScreen;
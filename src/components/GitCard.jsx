import Card from 'react-bootstrap/Card';


function GitCard({data}) {
  return (
    <div className='card'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={data.avatar_url} />
        <Card.Body>
        <Card.Title>Usuario: {data.login}</Card.Title>
        <Card.Text>
            
                <li>Following: {data.following}</li>
                <li>Followers: {data.followers}</li>
                <li>Repositorios: {data.public_repos}</li>
            
        </Card.Text>
        </Card.Body>
        </Card>
    </div>
  )
}

export default GitCard
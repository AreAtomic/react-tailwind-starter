import { CardArticle } from '../../atoms'

export const LoopArticle = (props) => {
    const repetition = props.repetition
    const items = []

    for (let i = 0; i< repetition; i++) {
        if(i%2==0){
            items.push(<div key={i} className='py-10'><CardArticle heading="Test" image ="" alt="test" price="10" text="Test Texte"/></div>) 
        }
        else{
            items.push(<div key={i} className='py-10 px-10'><CardArticle heading="Test" image ="" alt="test" price="10" text="Test Texte" /></div>) 
        }
        
    }
    return (<div className='flex'>{items}</div>)
}

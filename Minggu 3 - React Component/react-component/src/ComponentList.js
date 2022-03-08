import React, { Component } from 'react';
import Image from './ComponentImage'; 

class List extends Component {
    render() {
        return (
            <div>
                <ol>
                    <li>
                        Satu
                        <br></br>
      <Image linkGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg' />
                    </li>
                    <li>
                        Dua
                        <br></br>
      <Image linkGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg' />
                    </li>
                    <li>
                        Tiga
                        <br></br>
      <Image linkGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png' />
                    </li>
                    <li>
                        Empat
                        <br></br>
      <Image linkGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png' />
                    </li>
                </ol>
            </div>
        );
    }
}

export default List;

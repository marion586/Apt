import React, { FC } from 'react';
import { Button } from 'antd';
import { MdArrowBack } from 'react-icons/md';
import { useHistory } from 'react-router-dom';


interface ButtonProps {
    content: string;
}

const BackButton: FC<ButtonProps> = ({ content }) => {
    const history = useHistory();
    return (
        <>
            <Button style={{ color: "#000000", padding: 0, marginBottom: 15 }} icon={<MdArrowBack />} onClick={history.goBack} type='link'>
                {content}
            </Button>
        </>
    );
};

export default BackButton;

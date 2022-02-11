import { css } from '@emotion/react'

interface Props {
    children: React.ReactNode
}

const AppLayout = ({ children }: Props) => {
    return (
        <>
            <header
                css={css`
                    height: 80px;
                    background-color: tomato;
                    display: flex;
                `}
            >
                헤더
            </header>
            <div
                css={css`
                    height: 100%;
                    background-color: dodgerblue;
                `}
            >
                {children}
            </div>
        </>
    )
}

export default AppLayout

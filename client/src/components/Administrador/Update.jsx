import { useUpdate, useRecordContext } from 'react-admin';

export const IncreaseLikeButton = () => {
    const record = useRecordContext();
    const diff = { likes: record.likes + 1 };
    const [update, { isLoading, error }] = useUpdate();
    const handleClick = () => {
        update(
            'likes',
            { id: record.id, data: diff, previousData: record }
        )
    }
    if (error) { return <p>ERROR</p>; }
    return <button disabled={isLoading} onClick={handleClick}>Like</button>;
};


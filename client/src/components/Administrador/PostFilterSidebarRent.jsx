import { SavedQueriesList, FilterLiveSearch, FilterList, FilterListItem } from 'react-admin';
import { Card, CardContent } from '@mui/material';
import MailIcon from '@mui/icons-material/MailOutline';
import CategoryIcon from '@mui/icons-material/LocalOffer';

export const PostFilterSidebarRent = () => (
    <Card sx={{ order: -1, mr: 2, mt: 9, width: 200 }}>
        <CardContent>
            <SavedQueriesList />
            <FilterList label="Category" icon={<CategoryIcon />}>
                <FilterListItem label="No activos" value={{ category: 'noActives' }} />
            </FilterList>
        </CardContent>
    </Card>
);
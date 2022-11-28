import { SavedQueriesList, FilterLiveSearch, FilterList, FilterListItem } from 'react-admin';
import { Card, CardContent } from '@mui/material';
import MailIcon from '@mui/icons-material/MailOutline';
import CategoryIcon from '@mui/icons-material/LocalOffer';

export const PostFilterSidebar = () => (
    <Card sx={{ order: -1, mr: 2, mt: 8, width: 200 }}>
        <CardContent>
            <FilterLiveSearch />

            <FilterList label="Category" icon={<CategoryIcon />}>
                <FilterListItem label="No activos" value={{ category: 'noActives' }} />

            </FilterList>
        </CardContent>
    </Card>
);
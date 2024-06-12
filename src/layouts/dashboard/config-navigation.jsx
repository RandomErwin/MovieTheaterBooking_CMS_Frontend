import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: '院線更新',
    path: '/movies',
    icon: icon('ic_cart'),
  },
  {
    title: '會員列表',
    path: '/users',
    icon: icon('ic_user'),
  },
  {
    title: '紅利點數',
    path: '/bonus',
    icon: icon('ic_user'),
  },
  {
    title: '購買記錄',
    path: '/payments',
    icon: icon('ic_user'),
  },
  {
    title: '退款記錄',
    path: '/refunds',
    icon: icon('ic_user'),
  },
  {
    title: '評論審閱',
    path: '/reviews',
    icon: icon('ic_blog'),
  },
];

export default navConfig;

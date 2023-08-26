import styled from "styled-components";

export const ItemWrapper = styled.div`
  flex-shrink: 0;
  margin-bottom: 20px;
  box-sizing: border-box;
  width: ${props => props.width || '25%'};
  padding: 0 8px;

  .cover, .desc, .name {
    cursor: pointer;
  }

  .cover {
    position: relative;
    border-radius: 3px;
    /* 利用 padding-top 百分比值的特性，设置 padding-top 百分比值，作为图片的展示区域，解决图片之间高度不一致的问题 */
    /* margin-top、margin-bottom、padding-top、padding-bottom，这些属性设置百分比值时，相对的是包含块的宽度，而不是包含块的高度 */
    padding-top: 66.66%;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      /* 绝对定位元素的宽高百分比值相对于其最邻近定位祖先元素（如果不是 inline box）的 padding edge 进行计算 https://drafts.csswg.org/css-sizing/#preferred-size-properties
      https://drafts.csswg.org/css-position-3/#def-cb */
      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }

  .desc {
    padding: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.$verifyColor};
  }

  .name {
    font-size: 16px;
    font-weight: bold;
    /* https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp#truncating_a_paragraph */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .price {
    margin-top: 8px;
    font-size: 12px;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.text.primaryColor};

    .rating {
      display: flex;
      align-items: center;

      .MuiRating-icon {
        margin-right: -2px;
      }
    }

    .review-count {
      margin: 0 2px 0 4px;
    }
  }
`
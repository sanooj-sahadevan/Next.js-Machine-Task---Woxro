
export const interpolate = (start: number, end: number, progress: number): number => {
    return start + (end - start) * progress;
};

export const cubesData = {
    "cube-1": {
        initial: { top: -63, left: 37.5, rotateX: 360, rotateY: -180, rotateZ: 48, z: -4000 },
        final: { top: 50, left: 15, rotateX: 0, rotateY: 3, rotateZ: 0, z: 0 }
    },
    "cube-2": {
        initial: { top: -35, left: 32.5, rotateX: -180, rotateY: 180, rotateZ: 90, z: -4000 },
        final: { top: 75, left: 25, rotateX: 1, rotateY: 2, rotateZ: 0, z: 0 }
    },
    "cube-3": {
        initial: { top: -75, left: 50, rotateX: -90, rotateY: -90, rotateZ: -180, z: -4000 },
        final: { top: 25, left: 25, rotateX: -1, rotateY: 2, rotateZ: 0, z: 0 }
    },
    "cube-4": {
        initial: { top: -35, left: 50, rotateX: -90, rotateY: -90, rotateZ: -180, z: -4000 },
        final: { top: 75, left: 75, rotateX: 1, rotateY: -2, rotateZ: 0, z: 0 }
    },
    "cube-5": {
        initial: { top: -64, left: 63.5, rotateX: 90, rotateY: 320, rotateZ: 100, z: -4000 },
        final: { top: 25, left: 75, rotateX: -1, rotateY: -2, rotateZ: 0, z: 0 }
    },
    "cube-6": {
        initial: { top: -35, left: 67.5, rotateX: -90, rotateY: -180, rotateZ: 100, z: -4000 },
        final: { top: 50, left: 50, rotateX: 0, rotateY: 0, rotateZ: 0, z: 0 }
    }
};
